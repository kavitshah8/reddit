import Ember from 'ember';

export default Ember.Route.extend( {

	beforeModel: function(transition) {
		if (!this.controllerFor('login').get('token')) {
			this.transitionTo('login');
		}
	},

  actions: {
  	error: function(response) {

      if (response.jqXHR.status === 401 ) {
        this.transitionTo('login');
      } else {
        alert('something went wrong');
      }
  	}
  }

} );