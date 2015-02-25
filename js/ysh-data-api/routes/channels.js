var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET ads listing. */
router.get('/', function(req, res, next) {
	db.collection('channels').find({status:'A'}).sort({title:1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})

module.exports = router;
