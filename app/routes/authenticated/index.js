import Ember from 'ember';

export default Ember.Route.extend( {

  actions:{
  	error: function(response){

      if (response.jqXHR.status === 401 ){
        this.transitionTo('login');
      } else {
        alert('something went wrong');
      }
  	}
  }

} );