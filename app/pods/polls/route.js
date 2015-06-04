import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePoll(poll) {
      var pollRecord = this.store.createRecord('poll', poll);
      pollRecord.save();
    }
  }
});
