import Ember from 'ember';

export default Ember.Component.extend({

	// reset:function(){
	// 	this.set('searchText',null);
	// 	this.set('dictionary',[]);
	// }.on('init'),

	searchText: null,
	dictionary:[],

	results: function () {
				
		var searchText = this.get('searchText');
		if(!searchText) {
			return [];
		}

		var regex = new RegExp(searchText,'i');

		// var res = this.get('dictionary').filter(function(word){
		// 	return word.match(regex);
		// });

		// return res;

		return this.get('dictionary').filter(function(word){
			return word.match(regex);
		}); 
	}.property('searchText')

});
