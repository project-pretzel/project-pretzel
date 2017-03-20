import model from '../model';

module.exports = {

  results: {
    get: function (req, res) {
      model.results.get(function(err, results) {
        if (err) { console.log("err results get", err);}
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log("req.body", req.body)
      var params = [req.body.maintitle, req.body.title, req.body.link, req.body.pubdate, req.body.description];
      model.results.post(params, function(err, results) {
        if (err) { console.log("err results post", err);}
        res.sendStatus(201);
      });
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
      //sub is the gid
      //req.body.data is the google auth token

      var params = [req.body.data.sub, req.body.data.name, req.body.data.email, req.body.data.picture];
      model.users.post(params, function(err, results) {
        if (err) { console.log("err users post", err);}
        res.sendStatus(201);
      });
    }
  }
  };
