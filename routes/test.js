var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('test', {
		title: 'Hello, this is a test page',
		name: req.session.user ? req.session.user.username || '' : ''
	});
});

router.post('/', function(req, res) {
	req.session.user = {
		username: req.body.userName
	};
	res.redirect('/test');//test为绝对uri路径
});


router.post('/test', function(req, res, next) {
	return next(new Error('fsasdf'));//模拟ajax过程中发生500错误
	res.json({
		title: 'Hello World',
		name: req.session.user ? req.session.user.username || '' : ''
	});
});


module.exports = router;	