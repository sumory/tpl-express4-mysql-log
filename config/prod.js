var path = require('path');

module.exports = {
	port: 3000,
	viewEngine: 'ejs',

	views: path.join(__dirname, 'views'),
	staticPath: path.join(__dirname, 'public'),
	uploadDir: path.join(__dirname, 'public/uploads'),

	env: 'prod',
	logfile: 'logs/access.log',

	sessionSecret: 'session_secret_random_seed',

	//mysql config
	host: "localhost",
	user: "root",
	password: "",
	database: "test",
	enableDBLog: false
};