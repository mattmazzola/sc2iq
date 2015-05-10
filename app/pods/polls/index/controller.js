import Ember from 'ember';

export default Ember.Controller.extend({
  newPoll: null,

  actions: {
    submit() {
      return this.addPoll(this.newPoll);
    }
  },

  init() {
    this.set('newPoll', this.store.createRecord('poll'));
  },

  addPoll(poll) {
    return poll.save()
      .then(() => {
        return this.resetForm();
      });
  },

  resetForm() {
    return this.set('newPoll', this.store.createRecord('poll'));
  }

});
