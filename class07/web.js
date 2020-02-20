const net = require('net');

class Request {
  constructor(s) {
    const [method, path, version, ...parts] = s.split(' ');
    Object.assign(this, {method, path, version});
  }
}

class Response {
  static statusCodeMap = {
    200: 'OK', 
    404: 'Not Found'
  };

  static sep = '\r\n';

  constructor(sock) {
    this.sock = sock; 
    this.statusCode = 200;  
    this.headers = {};
  } 

  set(headerName, value) {
    this.headers[headerName] = value; 
  }

  send(body) {
    const statusLine = `HTTP/1.1 ${this.statusCode} ${Response.statusCodeMap[this.statusCode]}`;
    const headerString = Object.entries(this.headers)
      .map(arr => `${arr[0]}: ${arr[1]}`)
      .join(Response.sep);
    this.sock.write(statusLine + Response.sep);
    this.sock.write(headerString + Response.sep + Response.sep);
    this.sock.write(body);
    this.sock.end();
  }
}

class App {
  constructor() {
    this.routes = {};
    this.server = net.createServer(sock => {
      console.log('Client connected!');
      sock.on('data', (msg) => this.handleIncomingMessage(sock, msg));
    });
  }

  get(path, routeHandler) {
    this.routes[path] = routeHandler;
  }

  handleIncomingMessage(sock, msg) {
    const req = new Request(msg + '');
    const res = new Response(sock);

    console.log(req.method, req.path);

    if(this.routes.hasOwnProperty(req.path)) {
      const routeHandler = this.routes[req.path];
      routeHandler(req, res);
    } else {
      res.status = 404;
      res.set('Content-Type', 'text/plain');
      res.send('Not Found!!!!');
    }
  }

  listen() {
    this.server.listen(3000, '127.0.0.1');
  }
}
module.exports = App;

