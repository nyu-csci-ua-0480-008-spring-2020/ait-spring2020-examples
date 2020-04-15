const express = require('express');
const app = express();
//const server = require('http').Server(app);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
/*
const reload = require('express-static-livereload');
app.use(reload({
    server: server,
    path: 'public'
}));
*/

app.listen(3000);

const livereload = require('livereload');
const lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");

