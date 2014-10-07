import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

	getJSONWithoutToken:function(url){
		return ajax({url:url});
	}
});
