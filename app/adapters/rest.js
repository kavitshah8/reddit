import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

	getWithoutToken: function(url) {

		if( !this.controllerFor('login').get('token')) {
			return ajax({	url: url, type: 'GET', dataType: "json"});
		}
	},

	getWithToken: function(url) {
		var token = this.controllerFor('login').get('token');
		console.log(token);
		return ajax({ url: url, type: 'GET'}, {token: token });
	},

	postWithoutToken: function(url, params) {
		return ajax({ 	url: url,
						data: params,
						dataType: "json",
						type: 'POST'});
	}

});
