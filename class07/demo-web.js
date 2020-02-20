const App = require('./web.js');
const app = new App();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send('<a href="hello">hello</a> | <a href="bye">bye</a>');
});

app.get('/hello', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send('<link rel="stylesheet" href="styles.css"><h1>hello again!!!!!!!</h1>');
});

app.get('/bye', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('bye');
});

app.get('/styles.css', (req, res) => {
  res.set('Content-Type', 'text/css')
  res.send('h1 {color: #00FF00; font-size: 3em; font-family: sans-serif}');
});

app.listen();





