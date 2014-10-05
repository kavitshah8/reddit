import Ember from 'ember';
import SubredditAdapter from 'reddit/adapters/subreddit';

export default Ember.Route.extend({
	
	model:function(params){
		var adapter = SubredditAdapter.create();
		var url = "http://www.reddit.com/r/"+params.subreddit_id+".json";
		return adapter.getJSONWithoutToken(url);
		// return adapter.find('subreddit',params.subreddit_id);
	}
});
