const net = require('net');
class EchoServer {
  constructor(name, msg) {
    this.msg = msg;
    this.name = name;
    this.server = net.createServer((sock) => this.handleConnect(sock));
  }

  handleConnect(sock) {
    sock.write(this.msg);
    sock.on('data', (data) => this.handleData(sock, data)) 
  }

  handleData(sock, data) {
    sock.write(data); 
  }

  start() {
    this.server.listen(3000); 
  }

}

const es = new EchoServer('es', 'hello');
es.start();
