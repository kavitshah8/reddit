var Portfolio = require('portfolio');

var SharePortfolio = function () {
	this.name = null;
	this.code = null;
	this.baseFee = null;
};

SharePortfolio.prototype = new Portfolio();