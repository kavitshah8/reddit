import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

	getJSONWithoutToken: function(url){
		return ajax({	url: url, 
						type: 'GET', 
						dataType: "json"});
	},

	postWithoutToken: function(url, params){
		return ajax({ 	url: url,
						data: params,
						dataType: "json",
						type: 'POST'});
	},

});
