const bcrypt = require('bcryptjs');
var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/thrifty';
var db = pgp(connectionString);

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none('INSERT INTO users (username, password_digest, first_name, last_name, bio, gender, gender_pref, dob, profile_pic_url) VALUES (${username}, ${password}, ${firstname}, ${lastname}, ${bio}, ${gender}, ${genderpref}, ${dob}, ${profilepicurl} )', {username: req.body.username, password: hash, firstname: req.body.firstname, lastname:req.body.lastname, bio: req.body.bio, gender: req.body.gender, genderpref: req.body.genderpref, dob: req.body.dob, profilepicurl: req.body.profilepicurl});
}

module.exports = {
  comparePass,
  createUser
};
