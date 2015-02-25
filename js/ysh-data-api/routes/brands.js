var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET ads listing. */

router.get('/:id', function(req, res, next) {
	db.collection('brands').find({id:req.params.id}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
}).get('/cate/:cate', function(req, res, next) {
	db.collection('brands').find({cate:req.params.cate}).sort({cat:1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})

module.exports = router;
