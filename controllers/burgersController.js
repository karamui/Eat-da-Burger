// initializes Node.js package
var express = require("express");

// sets up routing
var router = express.Router();

// imports burger model
var burger = require("../models/burger.js");

// default route to display all burgers
router.get("/", function(request, result) {
  burger.select("burgers");
});

// route to add a new burger to the burger database
router.post("/api/burgers", function(request, result) {
  burger.insert("burgers", request.body.name);
});

// route to update the status of a burger in the database
router.put("/api/burgers/:id", function(request, result) {
  burger.update("burgers", request.body.devoured, request.params.id);
});

// exports router
module.exports = router;
