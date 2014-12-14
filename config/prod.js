var path = require('path');

module.exports = {
	port: 3000,
	viewEngine: 'ejs',

	views: path.resolve(__dirname, '..', 'views'),
	staticPath: path.resolve(__dirname, '..', 'public'),
	uploadDir: path.resolve(__dirname, '..', 'public/uploads'),

	env: 'prod',
	logfile: path.resolve(__dirname, '..', 'logs/access.log'),

	sessionSecret: 'session_secret_random_seed',

	//mysql config
	host: "localhost",
	user: "root",
	password: "",
	database: "test",
	enableDBLog: false,

	winston:{
		exceptionFile:path.resolve(__dirname, '..', 'logs/exceptions.log'),
		dailyRotateFile:path.resolve(__dirname, '..', 'logs/daily.log')
	}
};