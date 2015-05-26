import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addScore() {

      var fakeScore = this.store.createRecord('score', {
        score: Math.floor(Math.random()*100),
        duration: Math.floor(Math.random()*1500),
        datetime: new Date()
      });

      fakeScore.save();
    }
  }
});
