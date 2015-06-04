import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    saveQuestion(question) {
      var questionRecord = this.store.createRecord('question', question);
      questionRecord.save();
    }
  }
});
