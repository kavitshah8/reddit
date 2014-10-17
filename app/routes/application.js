import Ember from 'ember';

export default Ember.Route.extend({
	
	model:function () {
		return ['webdev','programming','javascript','devops','web_work','space','food','philosophy','jokes'];	
	}
});
