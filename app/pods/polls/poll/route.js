import Ember from 'ember';

export default Ember.Route.extend({
  model: function(parameters) {
    return this.store.filter('poll', parameters.poll_id);
  }
});
