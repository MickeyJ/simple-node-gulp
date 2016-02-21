var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
  res.render('index')
});

var port = 9000;

app.listen(port, function(){
  console.log('listening on port: '+ port)
});