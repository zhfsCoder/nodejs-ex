var http = require('http');

http.createServer(function (require, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('hello world\n');
}).listen(5000);
