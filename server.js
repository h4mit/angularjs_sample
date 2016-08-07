var express = require('express');
var app = express();
var path = require('path');

// define directory
app.use('/assets', express.static('assets'));
app.use('/build', express.static('build'));
app.use('/views', express.static('views'));
app.use('/data', express.static('data'));

// viewed at http://localhost:8000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000);

console.log('welcome to AngularJS example project');
console.log('viewed at : http://localhost:8000');