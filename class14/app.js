require('./db.js');
// retrieve constructor
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

const express = require('express');
const app = express();
app.set('view engine', 'hbs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// check public directory for path
// if it exists, serve file
// otherwise go on to the next thing
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});
// server will send Set-Cookie header
// browser receives this and saves name/value pair
// cookie stored on browser... always sent back to server  through Cookie header

// session is some server side data store that contains data about a particular client
// (a browser)
// {'123124124124124': {name: 'joe', cart:['foo', 'bar']}, '99999999111312222': {...}}
// having browser send session id via Cookie header... because server had already generated session and
// instructed client to store cookie

// authentication != sessions != cookies
// BUt we use sessions with auth
// we use cookies as a mechanism for sessions
// examines body of the request
// parses it
// dumps it into an object called req.body
// now you have ez access to form input
// goes on to next middleware or route
// after this, every middlware and route has access to req.body

// on.data to collect what client is sending
// check for headers and look for size header
// continue accumulating until that size

// net --> http --> express
// http parses the request for you
// express is built on top of that

// middleware is a function
// called before / after your route handlers
// in middleware, you can do anything you want to the req and res obj (including sending back
// a response!!!!)
// prebuilt middleware
// * express static
// * body parser

// create a path for a form to add articles
// form and articles on same page
app.get('/', (req, res) => {
  // shows form
  // show articles too
  Article.find({}, (err, articles) => {
    res.render('article', {articles: articles});
  });
});

// this path.... now has a variable in it
// name that variable with :someName
// access via req.params
app.get('/article/:something', (req, res) => {
  Article.find({title: req.params.something}, (err, foundArticle) => {
    res.send(foundArticle);
  });
});

app.post('/', (req, res) => {
  // or validation can go here (check req.body)
  const obj = {
    content: req.body.content
  };
  if (req.body.title) {
    obj.title = req.body.title;
  }
  const a = new Article(obj);
  a.save((err, savedArticle) => {
    // if there's an error object.... just rerender the template with some message
    console.log(err, savedArticle);
    if(err) {
      Article.find({}, (err, articles) => {
        res.render('article', {articles: articles, error: 'there was an error in your submission'});
      });
    } else {
      res.redirect('/');
    }
  });

});
app.listen(3000);
