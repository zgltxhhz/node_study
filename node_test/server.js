'use strict';

// 服务模块


let http = require('http')
let url = require('url')
let path = require('path')
let readStaticFile = require('./modules/readStaticFile')
http.createServer(function (req, res){
    let filePath = path.join(__dirname, '/bulid/view', url.parse(req.url).pathname)
    readStaticFile(res, filePath)
}).listen(8080);
console.log('服务器开启成功');