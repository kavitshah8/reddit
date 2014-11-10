import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.ObjectController.extend( {

	name: null,
	code: null,
	marketValue: null,
	success: false,

	actions:{
		save: function(){
			
			var adapter = Adapter.create();
			var params = {
				name: this.get("name"),
				code: this.get("code"),
				marketValue: this.get("marketValue"),
			};

			adapter.postWithoutToken('/api/portfolio/new', params);

			this.set('name',null);
			this.set('code',null);
			this.set('marketValue',null);
			
			this.transitionToRoute('portfolio');
		},
	},
} );