// import ORM
var orm = require("../config/orm.js");

// burger model
var burger = {
	select: function(cb) {
		orm.selectAll(function(response) {
			cb(response);
		});
	},
	insert: function(burgerName, cb) {
		orm.insertOne(burgerName, function(response) {
			cb(response);
		});
	},
	update: function(burgerStatus, burgerId, cb) {
		orm.updateOne(burgerStatus, burgerId, function(response) {
			cb(response);
		});
	}
}

// export burger model
module.exports = burger;