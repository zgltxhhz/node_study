'use strict';

// 路由模块

let http = require('http')
let url = require('url')


http.createServer(function (req, res) {
    let urlObj = url.parse(req.url)
    let urlPathname = urlObj.pathname
    
    // console.log(urlPathname)
    
    switch (urlPathname) {
        case '/index':
        res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
        res.write('主页页面');
        res.end();
        break;
        case '/about':
        res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
        res.write('关于我页面');
        res.end();
        break;
        case '/project':
        res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
        res.write('关于项目页面');
        res.end();
        break;
        default:
        res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
        res.write('404 not found');
        res.end();
    }
}).listen(8080)
console.log('服务器开启')
