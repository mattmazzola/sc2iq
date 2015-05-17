import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    saveQuestion(question) {
      var question = this.store.createRecord('question', question);
      Ember.Logger.log("route: saveQuestion: ", question.toJSON());
      question.save();
    }
  }
});
