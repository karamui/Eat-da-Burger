// import ORM
var orm = require("../config/orm.js");

// burger model
var burger = {
	select: function(tableName) {
		orm.selectAll(tableName);
	},
	insert: function(tableName, burgerName) {
		orm.insertOne(tableName, burgerName);
	},
	update: function(tableName, burgerStatus, burgerId) {
		orm.updateOne(tableName, burgerStatus, burgerId);
	}
}

// export burger model
module.exports = burger;