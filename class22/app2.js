
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// add your own api endpoints here!
app.listen(3001);
