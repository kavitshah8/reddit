var Portfolio = require('../models/portfolio');

module.exports = function(app) {
  var express = require('express');
  var serverRouter = express.Router();
  serverRouter.get('/', function(req, res) {
    res.send({"server":[]});
  });
  app.use('/api/server', serverRouter);
  
  // client-side authentication
  var currentToken;
  
  app.post('/api/auth', function(req, res){

    var body = req.body,
        username = body.username,
        password = body.password;

    if (username === 'ember' && password === 'cast') {
      currentToken = 'ABC';
      res.status(200).send({success: true, token: currentToken});
    } else {
      res.status(302).send({success: false, message: 'Invalid username/password'});
    }
  });

  function validTokenProvided(req, res) {

    // Check POST, GET, and headers for supplied token.
    var userToken = req.body.token || req.param('token') || req.headers.token;

    if (!currentToken || userToken != currentToken) {
      res.status(401).send({error: 'Invalid token. You provided: ' + userToken + ' token.'});
      return false;
    }

    return true;
  }

  // Api for Advise 
  var portfolioArray = [];

  app.get('/api/portfolio', function(req, res){
    console.log(req);

    if(validTokenProvided(req, res)){ 
      console.log(portfolioArray);
      // res.json(portfolioArray);
      res.status(200).send(portfolioArray);
    }
  });

  app.post('/api/portfolio/new', function(req, res){
    if (validTokenProvided(req, res)) {
      console.log(req.body);
      portfolioArray.push(Portfolio(req.body));
      console.log(portfolioArray);
      res.json(req.body);
    }
  });


  // for githooks
  app.post('/payload', function(req, res){
    console.log(req.body);
    res.json(req.body);
  });


};
