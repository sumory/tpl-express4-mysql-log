#!/bin/sh

echo 'npm install all dependent modules'
npm install .

echo 'check pm2 installed or not. if not, install pm2'
pm2 --version
if [ $? -eq 0 ];then
  echo 'pm2 installed'
else
  echo 'pm2 not installed, now install it...'
  npm install -g pm2
fi

echo 'mkdir logs folder'
mkdir -p logs
