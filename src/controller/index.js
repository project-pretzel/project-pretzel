var model = require('../model');

module.exports = {

  messages: {
    get: function (req, res) {
      model.messages.get(function(err, results) {
        if (err) { console.log("err message get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username, req.body.msgtext];
      model.messages.post(params, function(err, results) {
        if (err) { console.log("err message post", err);}
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      model.users.get(function(err, results) {
        if (err) { console.log("err users get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      //googleid is called sub
      var params = [req.body.sub, req.body.name, req.body.email, req.body.picture];
      model.users.post(params, function(err, results) {
        if (err) { console.log("err users post", err);}
        res.sendStatus(201);
      });
    }
  }
  };
