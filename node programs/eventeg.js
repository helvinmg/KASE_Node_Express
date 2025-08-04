const http = require('http');
const PORT=3000
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

//object.on("eventname",eventhandler function)
server.on('request', (req, res) => {
  console.log(`Received request for ${req.url}`);
});

server.listen(PORT);
