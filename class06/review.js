const net = require('net');

class Request {
  constructor(s) {
    // this = {}
    //
    // destructuring (multiple assignment)
    const [method, path, version, ...parts] = s.split(' ');

    // takes all props of 2nd arg...and adds to first arg
    Object.assign(this, {method, path, version});
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
    body = '<strong>this is the home page</strong>'; 
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
  }

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
  console.log(req.method, req.path);
  if(req.path === '/hello') {
    body = '<em>hello</em>'; 
    responseString = `HTTP/1.1 200 OK
Content-Type: text/html

${body}
`;
  } else if(req.path === '/bye') {
    // console.log(oops);
    body = '<strong>bye</strong>'; 
    responseString = `HTTP/1.1 200 OK
Content-Type: text/html

${body}
`;
  } else {
    responseString = `HTTP/1.1 404 OK
Content-Type: text/html

404
`;
  }

  sock.write(responseString);
  sock.end();
}

server.listen(3000, '127.0.0.1');







