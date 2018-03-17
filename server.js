// initializes Node.js packages
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");

// initializes Express.js server and defines port
var app = express();
var PORT = process.env.PORT || 8080;

// sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// sets up Handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports routes
var routes = require("./controllers/burgersController.js");
app.use(routes);

// loads static files
app.use(express.static("./public"));

// starts Express.js server
app.listen(PORT, function() {
	console.log("This app is listening on PORT: " + PORT + ".");
});