const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

// the following code gives us req.session
const session = require('express-session');
const sessionOptions = { 
  secret: 'secret for signing session id', 
  saveUninitialized: false, 
  resave: false 
}; 
app.use(session(sessionOptions));

app.get('/', (req, res) => {
  res.render('home', {name: req.session.name});
}); 

app.post('/', (req, res) => {
  req.session.name = req.body.name;
  res.redirect('/');
}); 
app.listen(3000);


