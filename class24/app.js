const express = require('express');
const mongoose = require('mongoose');
require('./db.js');
const Message = mongoose.model('Message');
const app = express();
app.set('view engine', 'hbs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/blank', (req, res) => {
  res.send('<h1>blank page!</h1>')
});
// GET /api/messages
app.get('/api/messages', (req, res) => {
  Message.find({}, (err, foundMessages) => {
    if(err) {
      console.log(err);
      res.status(500).send('there was an error');
    }
    res.json(foundMessages);
  });
});

app.post('/api/messages', (req, res) => {

  (new Message({
    msgText: req.body.msgText,
    msgFrom: req.body.msgFrom,
  })).save((err, savedMessage) => {
    if(err) {
      res.status(500).json({success: false});
    } else {
      res.json({success: true, result: savedMessage});
    }
  });
  
  // save the message
  // give back the saved message
  // or... some status
  // don't do redirect for api end point
});
app.listen(3000);





