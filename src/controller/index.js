var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { console.log("err message get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { console.log("err message post", err);}
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log("err users get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { console.log("err users post", err);}
        res.sendStatus(201);
      });
    }
  }
  };
