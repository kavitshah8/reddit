import Ember from 'ember';

export default Ember.Component.extend({

	searchText: null,
	dictionary:[],

	results: function () {
				
		var searchText = this.get('searchText');
		if(!searchText) {
			return [];
		}

		var regex = new RegExp(searchText,'i');

		return this.get('dictionary').filter(function(word){
			return word.match(regex);
		}); 
	}.property('searchText'),

	actions:{
		resultSelected: function(word){
			alert(word);
		},
	},

});
