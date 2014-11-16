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
  	console.log(req.body);
    portfolioArray.push(Portfolio(req.body));
    console.log(portfolioArray);
  	res.json(req.body);
  });

  app.get('/api/portfolio', function(req, res){
    console.log(portfolioArray);
    res.json(portfolioArray);
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

};
