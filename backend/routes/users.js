var express = require('express');
var router = express.Router();
let db = require('../db/queries')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/new', db.registerUser);
router.post('/login', db.authUser);
router.get('/art', ()=>{
  fetch('http://www.nyartbeat.com/list/event_searchNear?latitude=40.719130&longitude=-73.980000')
  .then()
})

module.exports = router;
