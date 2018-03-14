// initialize Node.js package
var mysql = require("mysql");

// creates MySQL server connection
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});

// connects to MySQL server
connection.connect(function(error) {
    if (error) {
      console.error("MYSQL CONNECTION ERROR: " + error);
    }
});

// exports connection
module.exports = connection;