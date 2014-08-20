var log4js = require('log4js');
var config = require('../config.js');

log4js.configure({
    appenders: [{
            type: 'console'
        }, //控制台输出
        {
            type: 'file', //文件输出
            filename: config.logfile,
            maxLogSize: 1024, //当超过maxLogSize大小时，会自动生成一个新文件
            backups: 3
        }
    ],
    replaceConsole: true //增加replaceConsole配置，让所有console输出到日志中，以[INFO] console代替console默认样式。
});


exports.logger = function(name,level){
    var logger = log4js.getLogger(name);
    logger.setLevel(level || 'INFO');
    return logger;
}