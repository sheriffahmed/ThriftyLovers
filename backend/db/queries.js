var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/userlist';
//postgres://postgres:postgres@localhost:5433/userlist
var db = pgp(connectionString);
const authHelpers = require('../auth/helpers');
const passport = require('../auth/local');

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

// function getOneUser(req,res){
// 	User.findById(req.params.id,{
// 		include: [Projects]
// 	})

// 	.then(function(user){
// 		res.send(user)
// 	})
// }

function getSingleUser(req, res, next) {
  db.any('select * from users where username = ${username}',
    req.params)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Fetched one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateSingleUser(req, res, next) {
  db.none('update users set username = ${newName} where username = ${username}',
    req.body)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Changed one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function registerUser(req, res, next) {
  return authHelpers.createUser(req)
    .then((response) => {
      passport.authenticate('local', (err, user, info) => {
        if (user) {
          res.status(200)
            .json({
              status: 'success',
              data: user,
              message: 'Registered one user'
            });
        }
      })(req, res, next);
    })
    .catch((err) => {
      res.status(500)
        .json({
          status: 'error',
          error: err
        })
    });
}

// function authUser(req, res, next) {
//   // console.log('testing login')
//   // passport.authenticate('local', (err, user) =>{

//   //   if(err){ res.status(500).send('error logging in.')}
//   //   if(!user){res.status(404).send('User Not Found')}
//   //     req.logIn(user, function (err){
//   //       if(err){return next(err);}
//   //       // else{ res.status(200).send('Logged In')}
//   //       res.send('localhost:3000/user.id') 

//   //       // return res.redirect('/users/' + req.user.id);
//   //   })}
//   // )(req, res, next);

//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { res.status(401).end();return }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//        res.send('/users/' + user.id);
//     });
//   })(req, res, next);

// };
function authUser(req, res, next) {
  passport.authenticate('local', (err, user) => {
    if (err) {
      res.status(500)
        .json({
          status: 'error',
          error: err
        })
    }
    if (!user) {
      res.status(404)
        .json({
          status: 'Not Found',
          error: err
        })
    }
    req.logIn(user, function (err) {
      if (err) {
        res.status(500)
          .json({
            status: 'Login Error',
            error: err
          })
      }
      res.status(200)
        .json({
          status: 'success',
          data: user,
          message: 'Registered one user'
        });
    })
  }
  )(req, res, next);
};




module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  registerUser: registerUser,
  updateSingleUser: updateSingleUser,
  authUser: authUser
};