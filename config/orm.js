// import MySQL server connection
var connection = require("./connection.js");

// ORM
var orm = {
	selectAll: function(tableName) {
	    var queryString = "SELECT * FROM " + tableName;
	    console.log(queryString);
	    
	    connection.query(queryString, function(error, result) {
	      	if (error) {
	        	console.log("MYSQL SELECT QUERY ERROR: " + error);
	        	return res.status(500).end();
	      	}

	      	// return all burger data
	      	console.log("Successfully selected all data.");
	      	res.render("index", { burgers: result });
	    });
	},
	insertOne: function(tableName, burgerName) {
		var queryString = "INSERT INTO " + tableName + " VALUES ('" + burgerName + "', false)";
	    
	    connection.query(queryString, function(error, result) {
	      	if (error) {
	        	console.log("MYSQL INSERT QUERY ERROR: " + error);
	        	return res.status(500).end();
	      	}

	      	// return the id of the new burger
   	 		res.json({ id: result.insertId });
   	 		console.log("New burger created: " + burgerName + "!");
	    });
	},
	updateOne: function(tableName, burgerStatus, burgerId) {
		var queryString = "UPDATE " + tableName + " SET devoured = " + burgerStatus + " WHERE id = " + burgerId;
	    
	    connection.query(queryString, function(error, result) {
	      	if (error) {
	        	console.log("MYSQL UPDATE QUERY ERROR: " + error);
	        	return res.status(500).end();
	      	} else if (result.affectedRows === 0) {
	      		console.log("MYSQL UPDATE QUERY ERROR: " + error);
	      		return res.status(404).end();
	      	} else {
	      		res.status(200).end();
	      		console.log("Status of " + burgerName + " has been updated!");
	      	}
	    });
	}
}

// export ORM
module.exports = orm;