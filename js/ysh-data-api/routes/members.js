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
})
.get('/dealers/rank/:number', function(req, res, next) {
	var top = parseInt(req.params.number);
	db.collection('members').find({type:'11'}).limit(top).sort({ta_compl_amount:-1}, function(err, docs) {
		if(!err){
			res.send(docs);		 
		}else{
			res.send({status : err});
		}
	});
})
.post('/account/', function(req, res, next){
	db.collection('members').findOne({'login_name' : req.body.name}, function(err, doc){
		if(!err){
			if (doc){
				res.send({'status' : 1, 'message' : 'member already exists'});
			}else{
				db.collection('members').insert({'login_name' : req.body.name, 'login_pass' : req.body.pass}, function(err, doc){
					if (!err){
						res.send({'status' : 0, 'result' : doc});	
					}else{
					    res.send({status : err});
					}
				});
			}
		}else{
			res.send({status : err});
		}
	});
}).get('/account/login', function(req,res, next){
	var credential = {'login_name' : req.query.name, 'login_pass' : req.query.pass};
	db.collection('members').findOne(credential, function(err, doc){
		if(!err){
			if (doc){
				res.send({'status' : 0, 'result' : doc})
			}else{
				res.send({'status' : 1, 'message' : 'login failed'});
			}			
		}else{
			res.send({status : err});
		}
	});
})

module.exports = router;
