// net module is built-in module
// for creating tcip clients and servers
// not really http/smtp ... up to you to implement this
// build up to an echo server
// client sends data
// server responds with same data

const net = require('net');
// create server will create new tcpip server
// function passed in will be called WHEN client
// connects
const server = net.createServer(function(sock) {
  // socket obj passed in to callback function
  // represents a connected client
  console.log('client connected');

  // it will call callback when event 'data' occurs
  // 'data' event means client sent us data
  sock.on('data', function(d) {
    console.log(d + ''); 
    sock.write(`I received: ${d}`);
  });
});

console.log('listening on port 3000');
server.listen(3000, '127.0.0.1');











