var express = require('express');
var router = express.Router();
var format = require('util').format;
var config = require('../config.js');

router.get('/img', function(req, res) {
	res.render('upload', {});
});

router.post('/img', function(req, res, next) {
	// the uploaded file can be found as `req.files.image` and the
	// title field as `req.body.title` 
	// 
	console.dir(req.files);
	//res.send(req.fields.name);
	
	var file = req.files.file?req.files.file[0]:req.files.profile[0];
	res.json({
		success:true,
		originalFilename:file.originalFilename,
		size:file.size/1024,
		path: file.path,
		url: file.path.replace(config.uploadDir,'')
	});
	
});
module.exports = router;