import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,

  actions: {
    toggleProperty(propertyName) {
      if(typeof propertyName === 'string') {
        this.toggleProperty(propertyName);
      }
    }
  }
});
