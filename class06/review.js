// forms
const net = require('net');

class Request {
  constructor(s) {
    // this = {}
    //
    // destructuring (multiple assignment)
    const [method, path, version, ...parts] = s.split(' ');

    // takes all props of 2nd arg...and adds to first arg
    Object.assign(this, {method, path, version});
    this.rawRequest = s;
  }

  parseHeaders() {
  
  }
}
/*
const s = `GET /foo HTTP/1.1
Content-Type: whatever

`
const req = new Request(s);
console.log(req.method, req.path);
*/
const routes = {
  '/': function(sock) {
    body = '<link rel="stylesheet" href="/foo.css"><strong>this is the home page</strong>'; 
    responseString = `HTTP/1.1 200 OK
Content-Type: text/html

${body}
`
    sock.write(responseString);
    sock.end();
  },
  '/foo.css': function(sock) {
    body = '* {color: red;}'; 
    responseString = `HTTP/1.1 200 OK
Content-Type: text/css

${body}
`
    sock.write(responseString);
    sock.end();
  },
  '/textfile': function(sock) {
    // read mytext.txt
    // send back as part of the response
    const fs = require('fs');
    fs.readFile('mytext.txt', 'utf8', function(err, data) {
      if(!err) {
        responseString = `HTTP/1.1 200 OK
Content-Type: text/plain

${data}
`;
        sock.write(responseString);
        sock.end();
      } 
    });
  },
  '/form': function(sock) {
    // read mytext.txt
    // send back as part of the response
    const fs = require('fs');
    fs.readFile('form.html', 'utf8', function(err, data) {
      if(!err) {
        responseString = `HTTP/1.1 200 OK
Content-Type: text/html

${data}
`;
        sock.write(responseString);
        sock.end();
      } 
    });
  },
}

const server = net.createServer(handleConnect);

function handleConnect(sock) {
  console.log('someone connected');
  sock.on('data', (d) => handleData(sock, d));
}





function handleData(sock, d) {
  const rawRequest = d + '';
  const req = new Request(rawRequest);
  let body;
  let responseString;
  console.log(req.method, req.path, req.rawRequest);
  // does the path exist in our routes object
  if(routes.hasOwnProperty(req.path)) {
    // grabbing function that is associated with
    // the path in the http request
    const routeHandler = routes[req.path];
    routeHandler(sock);
  } else {
    responseString = `HTTP/1.1 404 OK
Content-Type: text/html

404
`;
    sock.write(responseString);
    sock.end();
  }

}

// templating
// {{}} <-- this denotes a variable
// <html>
// <body>....
// <div>{{score}}</div>
server.listen(3000, '127.0.0.1');



















