var user = require('../models/user.js');
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    try {
        var password = req.body.password.trim();
        var username = req.body.username.trim();

        if (!username) {
            res.render('error', {
                msg: "用户名不能为空"
            });
            return;
        }
        if (!password) {
            res.render('error', {
                msg: "密码不能为空"
            });
            return;
        }

        var isExist =  user.queryUser(username, password);

        if (isExist) {
            req.session.user = { // 保存用户信息到session
                username: username
            };
            res.send("login success: "+username);
        } else {
            res.render('error', {
                msg: "用户不存在"
            });
        }

    } catch (e) {
        console.error(e);
        res.render('error', {
            msg: "登录发生异常"
        });
    }
});

module.exports = router;