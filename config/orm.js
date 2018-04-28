var connection = require('./connection.js');

//provides mysql functions with proper syntax
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//provides mysql functions with proper syntax
function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

var orm = {
    //function that selects and returns all table values
    selectAll: function(tableInput, callback) {
        //query string that returns all rows from table
        var queryString = "SELECT * FROM " + tableInput + ";";
        //connecting to database
        connection.query(queryString, function(e, r) {
           if (e) {
               throw e;
           }
           callback(r);
        });
    },

    //function that inserts one entry
    insertOne: function(table, columns, values, callback) {
        //query string to insert single values
        var queryString = "INSERT INTO " + table;

        queryString += " ("; 
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
        //query the database
        connection.query(queryString, values, function(e, r) {
			if (e) {
				throw e;
            }
            callback(r);
        });
    },

    //function that updates table with new entry
    updateOne: function(table, objColVals, condition, callback) {
        //query string to update single value
        var queryString = "UPDATE " + table;

        queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		//query the database 
		connection.query(queryString, function(e, r) {
			if (e) {
				throw e;
			}
			callback(r);
		});
	},

};

module.exports = orm;