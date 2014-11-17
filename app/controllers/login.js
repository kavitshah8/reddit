import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.Controller.extend({

	reset: function(){
		this.setProperties({
			username: "",
			password: "",
			errorMessage:""
		});
	},

	login: function(){

		var self = this;
		var adapter = Adapter.create();
		var data = this.getProperties('username','password');

		self.set('errorMessage', null);

		return adapter.postWithoutToken('/api/auth', data).then(function(response){
			self.set('errorMessage', response.message);
			if (response.success){	
				self.set('token', response.token);
			}
		});		

	}
});
