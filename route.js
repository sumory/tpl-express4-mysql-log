var test = require('./routes/test.js');
var user = require('./routes/user.js');
var upload = require('./routes/upload.js');
var auth = require('./routes/auth.js');

module.exports = function(app) {
	app.use('/test', test);
	app.use('/user', user);
	app.use('/upload', upload);
	app.use('/auth', auth);

	app.get("/", function(req, res,next){
		res.end("welcome!");
	});

};