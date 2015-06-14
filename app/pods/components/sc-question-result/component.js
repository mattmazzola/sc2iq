import Ember from 'ember';

export default Ember.Component.extend({
  // defaults
  isExpanded: false,

  // Singleline CP

  // Multiline CP

  // Observers

  // Actions
  actions: {
    toggleDetails: function () {
      this.set('isExpanded', !this.get('isExpanded'));
    }
  }

  // Methods
});
