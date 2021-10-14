#!/bin/bash这个是测试环境的打包
echo "compile static files..."
npm config set registry http://npm.guahao-inc.com/
npm install
name="ai-drug-admin-static-qa3"
if [ $DOCKER_NAME == $name ]
then
  npm run build:stable
else
  npm run build:test
fi
echo "success"

