'use strict';

let http = require('http')
let url = require('url')
let readStaticFile = require('./modules/readStaticFile')


http.createServer(function(req, res) {
    // 解析请求 URL
    let urlObj = url.parse(req.url, true);
    // 获取请求 URL 的路径
    let urlPathname = urlObj.pathname;
    // 获取请求 URL 的查询字符串解析成的对象
    let queryObj = urlObj.query;
    console.log(JSON.stringify(queryObj))
    
    console.log(urlPathname)
    // 路由
    switch (urlPathname) {
        // 响应 login 页面
        case "/":
            // console.log(111)
        case "":
            // console.log(222)
            readStaticFile(res, "bulid/view/login.html");
            break;
        // 响应查询对象的 JSON 形式到浏览器 
        case "/login":
            // console.log(333)
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write(JSON.stringify(queryObj));
            res.end();
            break;
        // 错误处理
        default:
            readStaticFile(res, "./404.html");
    }
}).listen(8888)
console.log('服务器开启成功');