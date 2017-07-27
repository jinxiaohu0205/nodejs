const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node.js\n');
});
console.log(22);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// *****
// var http=require("http");
// http.createServer(function(req,res){
//     res.setHeader("content-type","text/html;charset=utf-8");
//     // console.log(这是服务器);
//     // console.log(2)
//     res.end("hello world!");
// }).listen(8888);

var path=require('path');// 处理路径的
