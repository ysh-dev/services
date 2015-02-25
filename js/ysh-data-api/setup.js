
function setup(app){//app: an express instance "express()";
	
	// allow cross domain
	app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
	});
	
	var ads = require('./routes/ads');
	var users = require('./routes/users');
	var channels = require('./routes/channels');
	var brands = require('./routes/brands');
	var wares = require('./routes/wares');
	
	app.use('/ads', ads);
	app.use('/users', users);
	app.use('/channels', channels);
	app.use('/brands', brands);
	app.use('/wares', wares);
	
	console.info('ysh app initialized!');
}


module.exports = setup;