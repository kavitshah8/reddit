var Portfolio = function(){
	this.data = {
		name: null,
		code: null,
		marketValue: null,
	}
};

Portfolio.prototype.fill = function (info) {
	for(var prop in this.data) {
		if(this.data[prop] !== 'undefined') {
			this.data[prop] = info[prop];
		}
	}
};

module.exports = function(info){
	var instance = new Portfolio();
	instance.fill(info);
	return instance;
};