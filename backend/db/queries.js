var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/thrifty';
//postgres://postgres:postgres@localhost:5433/userlist
var db = pgp(connectionString);
const authHelpers = require('../auth/helpers');
const passport = require('../auth/local');
const jwt = require('jsonwebtoken');

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
          console.log(`res.body`, res.body)
            .json({
              status: 'success',
              data: user,
              message: 'Registered one user'
            });
            console.log(`Post Success: `, user, info)
        }
      })(req, res, next);
    })
    .catch((err) => {
      res.status(500)
        .json({
          status: 'error',
          error: err
        })
        console.log(`Post err: `, err)
    });
}


function authUser(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log("FIRST ERROR")
      res.status(500)
        .json({
          status: 'error',
          error: err
        })
    }
    else if (!user) {
      res.status(404)
        .json({
          status: 'Not Found',
          error: err
        })
    } else if (user) {
      req.logIn(user, function (err) { 
        if (err) {
          console.log("THIS ERROR")
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
            message: 'Logged in user'
          });
      })
    }
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