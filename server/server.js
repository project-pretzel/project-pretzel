var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
module.exports = app;

// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json() );

//app.use(express.static(path.resolve(__dirname, '..', 'public', 'client')));

app.post('/', function (req, res) {
  console.log('post /');
  res.sendStatus(200); // for testing purposes
});

app.get('/', function (req, res) {
  console.log('get /');
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  res.sendStatus(200); // for testing purposes
});

var port = process.env.PORT || 8000;
if(!module.parent){
    app.listen(port);
}
console.log("Listening on port " + port);
