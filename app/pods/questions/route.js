import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveQuestion(question) {
      var question = this.store.createRecord('question', question);
      Ember.Logger.log("route: saveQuestion: ", question.toJSON());
      question.save();
    }
  }
});
