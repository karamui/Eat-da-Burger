// initializes Node.js package
var express = require("express");

// sets up routing
var router = express.Router();

// imports burger model
var burger = require("../models/burger.js");

// default route to display all burgers
router.get("/", function(request, response) {
  burger.select(function(data) {
    response.render("index", { burgers: data });
  });
});

// route to add a new burger to the burger database
router.post("/api/burgers", function(request, response) {
  burger.insert(request.body.burgerName, function(data) {
    response.json({ id: data.insertId });
  });
});

// route to update the status of a burger in the database
router.put("/api/burgers/:id", function(request, response) {
  burger.update(request.body.devoured, request.params.id, function(data) {
    if (data.affectedRows === 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

// exports router
module.exports = router;