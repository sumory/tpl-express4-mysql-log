#!/bin/sh

# 'dev' or 'prod', check the folder config for more detail 
export NODE_ENV=dev

echo 'Please be sure you have install all needed modules'

if [ $NODE_ENV == 'dev' ];then
	echo 'start @ development mode'
	node-dev app.js
fi

if [ $NODE_ENV == 'prod' ];then
	echo 'start @ production mode'
	pm2 stop thisapp -f
	pm2 start app.js -n thisapp
fi

