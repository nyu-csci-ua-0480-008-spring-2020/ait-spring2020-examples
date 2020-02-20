const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>HELLO from Express</h1>');
})
app.get('/api/books', (req, res) => {
  res.send({title: 'Dune'});
})
app.get('/whatever', (req, res) => {
  res.sendFile('/tmp/dune.html');
})
app.listen(3000);
