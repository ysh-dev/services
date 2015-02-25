var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET ads listing. */
router.get('/', function(req, res, next) {
	db.collection('ads').find().sort({cat:1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})
.get('/:cate', function(req, res, next) {
	var _cate = req.params.cate;
	db.collection('ads').find({cate:_cate}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
});

module.exports = router;
