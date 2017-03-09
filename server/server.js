var express = require('express');
var bodyParser = require('body-parser');

var app = express();
module.exports = app;

// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );


app.post('/', function (req, res) {
  console.log('post /');
  res.sendStatus(200); // for testing purposes
});

app.get('/', function (req, res) {
  console.log('get /');
  res.sendStatus(200); // for testing purposes
});

var port = process.env.PORT || 4040;
if(!module.parent){
    app.listen(port);
}
console.log("Listening on port " + port);
