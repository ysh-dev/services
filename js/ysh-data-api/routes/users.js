var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET ads listing. */
router.get('/', function(req, res, next) {
	db.collection('users').find(function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
}).get('/rank/:number', function(req, res, next) {
	var top = parseInt(req.params.number);
	db.collection('users').find().limit(top).sort({ta_compl:-1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})

module.exports = router;
