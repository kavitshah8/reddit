var Portfolio = require('../models/portfolio');

module.exports = function(app) {
  var express = require('express');
  var serverRouter = express.Router();
  serverRouter.get('/', function(req, res) {
    res.send({"server":[]});
  });
  app.use('/api/server', serverRouter);
  
  var portfolioArray = [];

  app.post('/api/portfolio/new', function(req, res){
    if (validTokenProvided(req, res)) {
      console.log(req.body);
      portfolioArray.push(Portfolio(req.body));
      console.log(portfolioArray);
    	res.json(req.body);
    }
  });

  app.get('/api/portfolio', function(req, res){
    if(validTokenProvided(req, res)){ 
      console.log(portfolioArray);
      res.json(portfolioArray);
    }
  });

  // for githooks
  app.post('/payload', function(req, res){
    console.log(req.body);
    res.json(req.body);
  });

  // client-side authentication
  var currentToken;
  app.post('/api/auth', function(req, res){

    var body = req.body,
        username = body.username,
        password = body.password;

    if(username === 'ember' && password === 'cast'){
      currentToken = 'ABC';
      res.send({
        success: true,
        token: currentToken
      });
    }else{
      res.send({
        success: false,
        message: 'Invalid username/password'
      });
    }
  });

  function validTokenProvided(req, res) {

    // Check POST, GET, and headers for supplied token.
    var userToken = req.body.token || req.param('token') || req.headers.token;

    if (!currentToken || userToken != currentToken) {
      // depreciated pattern
      // res.send(401, { error: 'Invalid token. You provided: ' + userToken }); 
      // new pattern according to emebr-cli
      // res.status(status).send(body) (http://expressjs.com/4x/api.html#response)
      res.status(401).send({ error: 'Invalid token. You provided: ' + userToken + ' token.'});
      return false;
    }

    return true;
  }

};
