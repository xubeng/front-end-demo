var server = require('http');

server.createServer(function(request,response){
	console.log('request.url'+request.url);
	response.end('已接收');
}).listen(7777);

console.log('创建成功，监听端口为7777')