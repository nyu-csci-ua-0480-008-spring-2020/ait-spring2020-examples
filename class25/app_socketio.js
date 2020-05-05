const express = require('express');
const app = express();

const server = require('http').Server(app);

// global io object...
// represents our web socket server
const io = require('socket.io')(server);
app.use(express.static('public'));

// when a client connects, call this callback function
// io.emit --> everyone
// socket.emit --> send to currently connected
// socket.broadcast.emit --> everyone but currently connected
io.on('connection', function(socket) {
  // socket represents the "currently" connected client
	console.log(socket.id, 'has connected!');
  // socket has two methods available
  // on - reacts to events
  // emit - sends an event
  // on intial connect emit data from database
  socket.on('clicked', function(data) {
    // TODO: save to database
    console.log('received data', data);
    // sends to current client
    // socket.emit('echo', {msg: 'i received ' + data.msg});
    
    // sends to everyone
    io.sockets.emit('echo', {msg: 'i received ' + data.msg});
  });
  socket.on('mouseMoved', function(data) {
    console.log(data);
    // send to everyone except currently connected
    data.id = socket.id;
    socket.broadcast.emit('mouseMoved', data);
  });
});

server.listen(3000);







