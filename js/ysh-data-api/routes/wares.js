var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET ads listing. */

router.get('/brand/:br', function(req, res, next) {
	db.collection('wares').find({br:req.params.br}).sort({title:1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
}).get('/search/:title', function(req, res, next) {
	var query = {title: new RegExp(req.params.title, 'i') };
	db.collection('wares').find(query, function(err, docs) {
		if(!err){
			res.send(docs);
		}else{
			res.send({status : err});
		}
	});
}).get('/:id', function(req, res, next) {
	db.collection('wares').find({id:req.params.id}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})

module.exports = router;
