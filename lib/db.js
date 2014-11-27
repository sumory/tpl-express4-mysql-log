var mysql = require("mysql");
var config = require("../config");
var logger;

if (config.enableDBLog) {
	logger = require('./log.js').logger('db');
}


var pool = mysql.createPool({
	connectionLimit: 15,
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database,
	supportBigNumbers: true //dealing with big numbers as a string
		//debug: true
});


exports.query = function(sql, params, callback) {
	pool.getConnection(function(err, connection) {
		// connected! (unless `err` is set)
		if (err) {
			if (config.enableDBLog) {
				logger.error(err);
			}

			callback(err);
		} else {
			//console.log('connected as id ' + connection.threadId);
			connection.query(sql, params, function(err, data) {
				connection.release();
				if (err) {
					if (config.enableDBLog) {
						logger.error(err);
					}
				}
				callback(err, data);
			});
		}
	});
};

exports.logger = logger;