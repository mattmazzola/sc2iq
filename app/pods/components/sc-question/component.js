import Ember from 'ember';

export default Ember.Component.extend({
  isAnswersVisible: false,

  actions: {
    toggleProperty(propertyName) {
      console.log("toggleProperty: ", propertyName);
      if(typeof propertyName === 'string') {
        this.set(propertyName, !this.get(propertyName));
        console.log(this.get(propertyName));
      }
    }
  },


  answers: []
});
