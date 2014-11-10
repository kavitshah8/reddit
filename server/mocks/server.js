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
};
