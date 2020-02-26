// installed express, hbs via npm
const express = require('express');
const path = require('path');
// TODO: directory serving
// TODO: resolve vs join
const app = express();
const numbers = [3, 7, 1, 4, 6, 2];
app.set('view engine', 'hbs');
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// this makes your app runnable from any directory
// express.static's arg is "root directory"
const publicDir = path.join(__dirname, 'public');
// const publicDir = 'public'
app.use(express.urlencoded({ extended: false }));
// req.body contains parsed POST request data!!!!
app.use(express.static(publicDir));
// if file exists send back response with file as body
// if file doesn't exist ....... go to next middleware / route handler... 404

// templating system is handlebars
// hbs (but there are others)
// create a directory, views, that contains templates and layout
app.get('/', (req, res) => {
  res.send('this is the home page');
  // res.json
  // res.status .... and then .send
  // res.set .... set response headers
  // res.render 
});

app.get('/qs', (req, res) => {
  console.log(req.query);
  res.send('got' + req.query);
});
app.get('/templates-demo', (req, res) => {
  res.render('demo', {adjective: 'smol <<<<<<<<'});
});

app.post('/numbers', (req, res) => {
  numbers.push(parseInt(req.body.newNumber));
  res.redirect('/numbers');
  HTTP/1.1 303 see other
  Location: /numbers
  // res.render('numbers', {filter: req.query.n, numbers: numbers});
});

app.get('/numbers', (req, res) => {
  let results = numbers;
  if(req.query.n) {
    results = numbers.filter(n => n > parseInt(req.query.n));
  }  
  res.render('numbers', {filter: req.query.n, numbers: results});
});

// app object allows itself to be configured:
// app.set
// registering middlware:
// app.use
// http "verbs" / methods as actual method names:
// app.get - GET
// app.post - POST

app.listen(3000);
