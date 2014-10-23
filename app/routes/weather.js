import Ember from 'ember';
import Adapter from 'reddit/adapters/subreddit';

export default Ember.Route.extend({

	model: function(){
		var adapter = Adapter.create();
		var query = '%20item%20from%20weather.forecast%20where%20location%3D%2222102%22&';
		var url = 'http://query.yahooapis.com/v1/public/yql?q=select'+query+'format=json';

		return adapter.getJSONWithoutToken(url).then(function(result){
			return result.query.results.channel.item;
		});
	}
});
