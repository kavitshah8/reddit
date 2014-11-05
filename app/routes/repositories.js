import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.Route.extend({

	model: function(params) {

		var adapter = Adapter.create();

		var url = "https://api.github.com/users/kavitshah8/repos?type="+ params.type;

    if (params.type !== 'user') {
      return []; // no results;
    }
    else
    {	
			return adapter.getJSONWithoutToken(url).then(function(result){
				return result;    
    });
    }
    
  },
  
  actions: {
    queryParamsDidChange: function() {
      // opt into full refresh
      this.refresh();
    }
  }

});
