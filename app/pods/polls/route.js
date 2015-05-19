import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePoll(poll) {
      var poll = this.store.createRecord('poll', poll);
      Ember.Logger.log("route: savePoll: ", poll.toJSON());
      poll.save();
    }
  }
});
