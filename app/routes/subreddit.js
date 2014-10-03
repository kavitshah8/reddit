import Ember from 'ember';
import SubredditAdapter from 'reddit/adapters/subreddit';

export default Ember.Route.extend({
	
	model:function(params){
		var adapter = SubredditAdapter.create();
		return adapter.find('subreddit',params.subreddit_id);
	}
});
