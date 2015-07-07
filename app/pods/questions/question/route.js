import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion(question) {
      question.save();
    }
  }
});
