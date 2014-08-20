var db = require('../lib/db.js');

var users={
	"sumory":"123456",
	"test":"123456"
};



exports.queryUser=function(username, password){
	if(users[username]==password){
		return true;
	}
	return false;
};


exports.queryUsers=function(callback){
	db.query("select * from test", [], callback);
};
