import Adapter from 'reddit/adapters/rest';
import AuthenticatedRoute from 'reddit/routes/authenticated/index';

export default AuthenticatedRoute.extend({
	
	model: function() {
		var adapter = Adapter.create();
		var url = "/api/portfolio";
		return adapter.getWithToken(url).then(function(result){
			return result;    
    });
  },
  

});
