import Ember from 'ember';
import Adapter from 'reddit/adapters/subreddit';

export default Ember.Route.extend({

	model: function(){
		var adapter = Adapter.create();
		var url = 'https://api.github.com/repos/emberjs/ember.js/contributors';

		return adapter.getJSONWithoutToken(url).then(function(contributors){
			return contributors.mapBy('login');
		});
	},

});
