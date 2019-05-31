'use strict'

// 读取静态文件模块

let fs = require('fs')
let path = require('path')
let mime = require('mime')

function readStaticFile(res, filePath) {
    let ext = path.parse(filePath).ext
    let mimeType = mime.getType(ext)
    
    // 判断路径是否有后缀, 有的话则说明客户端要请求的是一个文件 
    // 返回 true 表示, 客户端想要的 是 静态文件
    // 返回 false 表示, 客户端想要的 不是 静态文件
    if (ext) {
        fs.readFile(filePath, function(err, data){
            if (err) {
                res.writeHeader(404, {
                    'content-type': 'text/html;charset="utf-8"'
                })
                res.write('<h1>404 not found</h1><p>你要找的页面不存在</p>');
                res.end();
            } else {
                res.writeHeader(200, {
                    'content-type': mimeType
                })
                res.write(data);
                res.end();
            }
        })
        return true
    } else {return false}
}

module.exports = readStaticFile


