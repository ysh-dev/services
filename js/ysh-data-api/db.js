var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/ysh_t_db');
	
db.on('error',function(err) {
	console.log('database error', err);
});
db.on('ready',function() {
	console.log('database connected');
});

module.exports = db;
