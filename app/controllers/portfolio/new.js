import Ember from 'ember';
import Adapter from 'reddit/adapters/rest';

export default Ember.ObjectController.extend( {

	name: '',
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

			adapter.postWithoutToken('/api/portfolio/new', params).then(function(){
				this.set("success",true);
			}).catch(function(){
				alert("catch block");
			}).finally(function(){
				this.set("success",true);
			});
			// console.log(params);
		},
	},
} );