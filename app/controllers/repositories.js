import Ember from 'ember';

export default Ember.ArrayController.extend({

  queryParams: ['type'],
  type: null,
  
  queryField: Ember.computed.oneWay('type'),

  actions: {
    search: function() {
      this.set('type', this.get('queryField'));
    }
  }			
});
