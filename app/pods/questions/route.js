import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    saveQuestion(question) {
      // Save current user as author
      question.author = this.get('session.currentUser');
      
      var questionRecord = this.store.createRecord('question', question);
      questionRecord.save();
    },
    search(query) {
      console.log(`query: ${query}`);
    }
  }
});
