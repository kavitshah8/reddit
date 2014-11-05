module.exports = function(app) {
  var express = require('express');
  var serverRouter = express.Router();
  serverRouter.get('/', function(req, res) {
    res.send({"server":[]});
  });
  app.use('/api/server', serverRouter);
  
  app.post('/api/portfolio/new', function(req, res){
  	console.log(req.body);
  	res.json(req.body);
  });
};
