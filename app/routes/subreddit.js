import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.Route.extend({
	
	model:function(params){
		var adapter = Adapter.create();
		var url = "http://www.reddit.com/r/"+params.subreddit_id+".json";

		return adapter.getWithoutToken(url).then(function(result){
			return result.data.children.map(function(c){
				return {
					id: c.id,
					title: c.data.title,
					domain: c.data.domain,
					url: c.data.url,
					thumbnail:c.data.thumbnail,
					author:c.data.author
				};
			});
		});
	}
});
