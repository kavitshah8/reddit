var Portfolio = function(){
	this.name = NULL;
	this.code = NULL;
	this.marketValue = NULL;
};

module.exports = function(){
	var instance = new Portfolio();
	return instance;
};