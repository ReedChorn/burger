var orm = require('../config/orm.js')

// burger object
var burger = {
  // select all burger table entries
  selectAll: function(callback) {
    orm.selectAll('burgers', function(res) {
      callback(res);
    });
  },

  // The variables columns and values are arrays
  insertOne: function(columns, values, callback) {
    orm.insertOne('burgers', columns, values, function(res) {
      callback(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;