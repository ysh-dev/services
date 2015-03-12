var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET ads listing. */
router.get('/', function(req, res, next) {
	db.collection('members').find(function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
}).get('/dealers/rank/:number', function(req, res, next) {
	var top = parseInt(req.params.number);
	db.collection('members').find({type:'11'}).limit(top).sort({ta_compl_amount:-1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})

module.exports = router;
