import Ember from 'ember';

export default Ember.Component.extend({
  // defaults
  isExpanded: false,

  // Singleline CP
  computedIndex: Ember.computed('index', function (key, value) { return this.get('index') + 1; }),
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
