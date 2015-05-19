import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,

  actions: {
    addVote() {
      this.incrementProperty('poll.votes');
    },

    subtractVote() {
      this.decrementProperty('poll.votes');
    },

    toggleProperty(propertyName) {
      if(typeof propertyName === 'string') {
        this.set(propertyName, !this.get(propertyName));
      }
    }
  }
});
