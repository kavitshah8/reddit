import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('subreddit', { path: '/r/:subreddit_id' });
  this.route('login');
  this.route('weather');
  this.route('repositories');
  this.route('advise');
  this.resource('portfolio', function() {
  	this.route('new');
  });
});

export default Router;
