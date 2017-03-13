var mysql = require('mysql');

// Create a database connection and export it from this file.
var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pretzel'
});

exports.dbConnection = dbConnection;