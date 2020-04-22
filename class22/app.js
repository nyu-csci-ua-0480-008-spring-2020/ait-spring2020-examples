const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const messages = [{content: 'hello', name: 'joe'}, {content: 'hi', name: 'foo'}];

app.get('/cookies', (req, res) => {
  res.set('Set-Cookie', 'foo=bar');
  res.send('done');
});
// /api/v2/messages
app.get('/api/messages', (req, res) => {
  console.log('in api end point');
  console.log(res.headers, res.get('Cookie'));
  res.json(messages);
  // just give back json
});
// add your own api endpoints here!
app.listen(3000);
