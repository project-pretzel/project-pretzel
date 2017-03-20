var model = require('../model');

module.exports = {

  results: {
    get: function (req, res) {
      model.results.get(function(err, results) {
        if (err) { console.log("err results get", err);}
        res.json(results);
      });
    },
    id INT NOT NULL AUTO_INCREMENT, 
  title TEXT, 
  link TEXT, 
  msgtime DATETIME, 
    post: function (req, res) {
      var params = [req.body.title, req.body.link, req.body.msgtime];
      model.messages.post(params, function(err, results) {
        if (err) { console.log("err results post", err);}
        res.sendStatus(201);
      });
      res.sendStatus(201)
    }
  },

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
      var params = [req.body.googleid, req.body.name, req.body.email, req.body.img];
      model.users.post(params, function(err, results) {
        if (err) { console.log("err users post", err);}
        res.sendStatus(201);
      });
    }
  }
  };
