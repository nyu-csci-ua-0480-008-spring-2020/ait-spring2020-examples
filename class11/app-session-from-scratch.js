
/*
browser response headers to set some cookies
Set-Cookie: foo=bar; httponly; secure
Set-Cookie: baz=qux
Set-Cookie: sessionid=123; httponly; secure

on every request browser sends:
Cookie: foo=bar; baz=qux
*/ 
const crypto = require('crypto');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');

// "in memory" session store... or use actual database
// if using express-session... you can specify the session store u want
// example data may be: {123: {name: 'joe', favColor: 'green'}}
// if session id manipulated on client side:
// 1. modified session id may not be valid (probz good)
// 2. ...OR access to another client's session (v bad!)
const sessions = {}; 


app.use(express.urlencoded({ extended: false }));

// this middleware parses cookies and drops name value pairs
// in request object as req.cookies
app.use((req, res, next) => {
  const cookieHeader = req.get('Cookie');
  const parts = cookieHeader.split('; ');
  const cookiesObj = parts.reduce((cookies, nameValue) => {
    const [name, value] = nameValue.split('=');
    cookies[name] = value;
    return cookies;
  }, {});
  req.cookies = cookiesObj;
  next();
}); 

// this middleware will provide access to in memory session store 
// based on session id sent via cookies... access is mediated via
// req.session (essentially a reference to value in global session
// object)
app.use((req, res, next) => {
  // if session id is sent AND it exists in sessions
  if(req.cookies.sessionId 
      && sessions.hasOwnProperty(req.cookies.sessionId)) {
    req.session = sessions[req.cookies.sessionId];
    console.log('FOUND existing session id:', 
      req.cookies.sessionId, 
      'all sessions are:',
      sessions);
  } else {
    // browser has not sent any cookies
    // or cookies sent does not have sessionId
    // or session id not in session store
    
    // generate new session id for client
    // WARNING: did not use base64 to exclude = signs from
    // session id value; our cookie parser does not handle 
    // quoted cookie values to escape ='s 😞
    // unfortunately, this limits complexity of session id
    const sessionId = crypto.randomBytes(16).toString('hex');
    sessions[sessionId] = {};
    res.append('Set-Cookie', 'sessionId=' + sessionId);
    req.session = sessions[sessionId];
    console.log('NEW session id generated:', 
      req.cookies.sessionId, 
      '| all sessions:', 
      sessions, 
      '| req.session:', 
      req.session);
  } 
  next();

});

app.get('/', (req, res) => {
  res.render('home', {name: req.session.name});
}); 

app.post('/', (req, res) => {
  console.log('post', req.session);
  req.session.name = req.body.name;
  res.redirect('/');
}); 

// example route for making cookies manually
// via Set-Cookie header
app.get('/bake', (req, res) => {
  // two ways to write cookies
  // res.set() // overwrite existing
  // res.append() // add headers of same name
  
  // first middleware functions allows us to
  // access cookies via prop on request obj
  console.log(req.cookies);
  res.send('cookie header is' + req.cookies);
  res.append('Set-Cookie', 'foo=bar');
  res.append('Set-Cookie', 'session_id=123; httponly'); // use secure when over ssl
  res.send('made u a cookies');
});

app.listen(3000);


