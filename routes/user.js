var express = require('express');
var userModel = require('../models/user.js');
var router = express.Router();

var logger = require('../lib/log.js').logger('user');


router.get('/', function(req, res) {
	//res.send('respond with a resource');
	res.json({
		msg: 'request path is [/users], response type is json'
	});
});


router.get('/users', function(req, res) {
	userModel.queryUsers(function(err, data){
		if(err){
			res.send('error when query');
		}
		else{
			logger.info('Get all users.');
			res.send(JSON.stringify(data));
		}
	})
});

module.exports = router;