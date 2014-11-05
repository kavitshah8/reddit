var Portfolio = require('portfolio');

var SharePortfolio = function () {
	this.name = NULL;
	this.code = NULL;
	this.baseFee = NULL;
};

SharePortfolio.prototype = new Portfolio();