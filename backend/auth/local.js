const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/thrifty';
var db = pgp(connectionString);
const authHelpers = require('./helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  console.log(username, password)
  db.one('SELECT username, password_digest, id, gender, gender_pref, budget_tier FROM users WHERE username=$1', [username])
    .then((user) => {
      console.log('database user: ', user.password_digest)
      if (!user) {
        console.log('Not User')
        return done(null, false);
      } if (!authHelpers.comparePass(password, user.password_digest)) {
        console.log('Password Problems')
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
    .catch((err) => {
      console.log("HELLO???")
      console.log(err)
      return done(err);
    })
}))

module.exports = passport;
