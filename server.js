var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.sendFile(path.resolve('index.html'));
});

app.get('/game.html', function(request, response) {
	response.sendFile(path.resolve('game.html'));
});

app.get('/gameOver.html', function(request, response) {
	response.sendFile(path.resolve('gameOver.html'));
});

app.post('/submit', function(request, response){
	response.send({"vehicles":[],"passengers":[]});
});

app.listen(app.get('port'), function() {
  //console.log('Node app is running on port', app.get('port'));
});

//app.listen(process.env.PORT || 5000);