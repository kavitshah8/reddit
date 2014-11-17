import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  // var token = this.controllerFor('login').get('token');

	token: function() {
    return window.reddit.__container__.lookup( 'controller:login' ).get( 'token' );
  },

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

	getWithToken: function(url){
		console.log(this.token());
		return ajax({ url: url,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      type: 'GET',
      headers: { 'Authorization' : 'Bearer ' + this.token() } });
	}

});
