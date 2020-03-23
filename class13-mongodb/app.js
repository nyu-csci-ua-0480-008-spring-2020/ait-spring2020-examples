const mongoose = require('mongoose');
const express = require('express');

// this allows us to connect to db
// get constructor later
require('./db.js');
const app = express();
app.set('view engine', 'hbs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
// display cats in database on webpage

const Cat = mongoose.model('Cat'); // this is now the constructor

app.get('/', (req, res) => {
  Cat.find({}, (err, result) => {
    res.render('cats', {cats: result});
  });
});



app.listen(3000);
