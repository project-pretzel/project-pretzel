var express = require('express');
var bodyParser = require('body-parser');

var app = express();
module.exports = app;

// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );


app.post('/', function (req, res) {
  console.log('post /');
});

app.get('/', function (req, res) {
  console.log('get /');
  res.send(200);
});

var port = process.env.PORT || 4040;
app.listen(port);
console.log("Listening on port " + port);
