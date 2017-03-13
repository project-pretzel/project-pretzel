var assert = require('assert');
var chai = require('chai'), expect = chai.expect, should = chai.should();
var server = require('../src/server.js');
var request = require('request');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Server', function() {

  it('should make a POST request and respond with status: 200', function(done) {
    chai.request(server)
    .post('/')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('should make a GET request and respond with status: 500', function(done) {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.should.have.status(500);
      done();
    });
  });

  it('should make an GET request to Google Trends', function(done) {
    chai.request('https://trends.google.com/trends/hottrends/visualize/internal/data')
    .get('https://trends.google.com/trends/hottrends/visualize/internal/data')
    .end((err, res) => {
      res.should.exist;
      done();
    });
  });

});
