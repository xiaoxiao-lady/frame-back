#!/bin/bash
echo "compile static files..."
cd ../
npm config set registry http://npm.guahao-inc.com/
npm run build
echo "success"
