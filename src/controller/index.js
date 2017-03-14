var model = require('../model');

module.exports = {

  messages: {
    get: function (req, res) {
      console.log("message get")
      model.messages.get(function(err, results) {
        if (err) { console.log("err message get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log("message post")
      var params = [req.body.userid, req.body.msgtext, req.body.msgtime];
      model.messages.post(params, function(err, results) {
        if (err) { console.log("err message post", err);}
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      console.log("users get")
      model.users.get(function(err, results) {
        if (err) { console.log("err users get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log("users post")
      var params = [req.body.googleid, req.body.name, req.body.email, req.body.img];
      model.users.post(params, function(err, results) {
        if (err) { console.log("err users post", err);}
        res.sendStatus(201);
      });
    }
  }
  };
