'use strict'

let fs = require('fs')


// writeFile 创建文件，如果有会把内容覆盖掉
fs.writeFile('gao.txt', '这是创建的文件', (err, data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// fs.writeFile('stream.js', 'let stream = require("stream")', (err, data)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// appendFile这是追加内容，不会覆盖文件内容
fs.appendFile('gao.txt', ',我在后面追加了一些内容',  (err, data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
// readFile这是读取文件内容
fs.readFile('1.txt', 'utf-8', function(err, data){
    if (err){
        fs.writeFile('1.txt', '这是创建的文件', (err, data)=>{
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    } else {
        console.log('文件内容:', data)
    }
})