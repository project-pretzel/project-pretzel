var assert = require('assert');
var chai = require('chai'), expect = chai.expect, should = chai.should();
var server = require('../server/server.js');
var request = require('request');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Server', () => {

  it('should make a POST request and respond with status: 200', (done) => {
    chai.request(server)
    .post('/')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('should make a GET request and respond with status: 200', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

});