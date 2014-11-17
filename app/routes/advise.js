import Adapter from 'reddit/adapters/rest';
import AuthenticatedRoute from 'reddit/routes/authenticated/index';

export default AuthenticatedRoute.extend({

	model: function(){
		var adapter = Adapter.create();
		var url = 'https://api.github.com/repos/emberjs/ember.js/contributors';

		return adapter.getWithoutToken(url).then(function(contributors){
			return contributors.mapBy('login');
		});
	},

});
