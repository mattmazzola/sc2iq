import Ember from 'ember';

export default Ember.Controller.extend({
  newQuestion: null,

  actions: {
    submit() {
      return this.addPoll(this.newQuestion);
    }
  },

  init() {
    this.set('newQuestion', this.store.createRecord('question'));
  },

  addPoll(question) {
    return question.save()
      .then(() => {
        return this.resetForm();
      });
  },

  resetForm() {
    return this.set('newQuestion', this.store.createRecord('question'));
  }

});
