import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.ObjectController.extend( {

	name: '',
	code: null,
	marketValue: null,

	actions:{
		save: function(){
			
			var adapter = Adapter.create();
			var params = {
				name: this.get("name"),
				code: this.get("code"),
				marketValue: this.get("marketValue"),
			};

			adapter.postWithoutToken('/api/portfolio/new', {params:params}).then(function(){
				
			}).catch(function(){
				alert("catch block");
			}).finally(function(){
				alert("finally block");
			});
			// console.log(params);
		},
	},
} );