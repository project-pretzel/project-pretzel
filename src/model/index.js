var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // fetch all messages
      // id , userid, msgtext, msgtime 
      var queryStr = 'select messages.id, messages.userid, messages.msgtext, users.msgtime \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(userid, msgtext, msgtime) \
                      values ((select id from users where username = ? limit 1), ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      //id, googleid, name, email, img
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(googleid, name, email, img) values (?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
  };