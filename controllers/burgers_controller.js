var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//grab all data and render for homepage
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
  
      res.render('index', hbsObject);
    });
});
  
//adding burger names to list
router.post('/burgers', function(req, res) {
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
//burger's status changes to devoured, move to homepage
router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });
  
module.exports = router;