var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');

var app = express();
module.exports = app;

// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/..'));

//app.use(express.static(path.resolve(__dirname, '..', 'public', 'client')));

app.post('/', function (req, res) {
  console.log('post /');
  res.sendStatus(200); // for testing purposes
});

app.get('/', function (req, res) {
  console.log('get /');
  // res.sendFile(path.resolve('public', 'dist', 'index.html')); //commented out because my directory doesn't contain file
  res.sendStatus(500); // for testing purposes
});

request.get('https://trends.google.com/trends/hottrends/visualize/internal/data', function(req, res) {
  console.log(JSON.parse(res.body).united_states); // getting top 20 US google trends
});

var port = process.env.PORT || 8000;
if(!module.parent){
    app.listen(port);
}
console.log("Listening on port " + port);
