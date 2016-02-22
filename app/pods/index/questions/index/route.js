import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save(question) {
      console.log(`questions: ${question}`);
      var questionRecord = this.store.createRecord('question', question);
      questionRecord.save();
      return questionRecord;
    },
    
    search(query) {
      console.log(`query: ${query}`);
    }
  }
});
