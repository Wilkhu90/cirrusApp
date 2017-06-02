var express = require('express');
var app = express();
var path = require('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './index.html'));
// });

app.listen(4000, function() {
  console.log('Magic happens on port 4000');
});
