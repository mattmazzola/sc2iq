import Ember from 'ember';

export default Ember.Component.extend({
  isAnswersVisible: false,

  actions: {
    toggleProperty(propertyName) {
      if(typeof propertyName === 'string') {
        this.set(propertyName, !this.get(propertyName));
      }
    }
  },


  answers: []
});
