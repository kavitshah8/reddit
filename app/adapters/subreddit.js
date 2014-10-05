import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

	getJSONWithoutToken:function(url){
		return ajax({url:url}).then(function(result){
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
	},

	find:function(name,id){
		return ajax({ url: "http://www.reddit.com/r/"+id+".json", dataType: "json",type: 'GET' })
				.then(function(result){
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
	},

	findGit:function(name){
		return ajax({ url: "https://github.com/users/"+ name , dataType: "json"});
	}

});
