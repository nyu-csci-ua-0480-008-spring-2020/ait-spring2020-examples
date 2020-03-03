const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// populates req.body
// req.query available by default w/ out middleware
// holds query string parameters
app.set('view engine', 'hbs');

const cats = [{name: 'bill furry', lives: 9},{name: 'kitty purry', lives: 8}];
// display all cats' names and lives as an unordered list on / (root)

app.get('/', (req, res) => {
  let result = cats;
  if(req.query.hasOwnProperty('minLives')) {
    result = cats.filter(cat => cat.lives >= parseInt(req.query.minLives));
  }
  // const contextObject = {cats: cats};
  res.render('cats', {cats: result});
});

app.post('/', (req, res) => {
  // probz validate
  // like remove html
  // make sure data types correct, etc.
  cats.push({name: req.body.name, lives: req.body.lives});
  // res.render('cats', {cats: cats});
  // if errors, re render template
  res.redirect('/');
});
/*
 *
HTTP/1.1 200 OK
Set-Cookie: foo=bar
Set-Cookie: baz=qux
Set-Cookie: session_id=123; HttpOnly, Secure


// browser makes cookes
// next time browser makes request to same domain
GET /some/path HTTP/1.1
Cookie: foo=bar; baz=qux, sesseion_id=123



initial request to get form
GET / HTTP/1.1
(headers here)

response from the server
HTTP/1.1 200 OK
(headers)

<!DOCTYPE.... all the form>

// pushing submit button cat creation
POST / HTTP/1.1
(headers here)

name=Paw+Newman&lives=5

// response
HTTP/1.1 302 Temporary Redirect
Location: /

// browser must make new request to /
GET / HTTP/1.1

(headers here)
*/
/*
on same page, i want form that filters cats shown by their # of lives... so only show
cats w/ >= some thresh
use express static to serve files that don't change (css, images, static html)
in "production", static files are typically served from a different server or a "cdn"
app.get
app.post
*/
app.listen(3000);









