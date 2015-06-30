import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  min: null,
  max: null,
  value: null,

  width: computed('min', 'max', 'value', function(key, value) {
    var percentage = Math.floor(100 *  (this.get('value') / (this.get('max') - this.get('min'))));
    return `${percentage}%`;
  })
});
