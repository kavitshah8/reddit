import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.Route.extend({
	
	model: function() {
		var adapter = Adapter.create();
		var url = "/api/portfolio";
		return adapter.getJSONWithoutToken(url).then(function(result){
			return result;    
    });
  },
   
});
