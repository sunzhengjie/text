var http = require('http');
http.createServer(function(req, res) { res.writeHead(200, {'Content-Type': 'text/html'}); res.write('<h1>Node.js</h1>');
res.end('<p>Hello World 11111111111</p>');
}).listen(4000);
console.log("HTTP server is listening at port 4000.");
