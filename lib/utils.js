var util=require("util");

exports.checkLogin = function(req, res, next) {
	if (req && req.session && req.session.user) {
		next();
	} else {
		res.render('error', {
			msg: '请先登录再执行相关操作',
			nologin: true
		});
		return;
	}
};


exports.isArray = function(param){
	return util.isArray(param);
};