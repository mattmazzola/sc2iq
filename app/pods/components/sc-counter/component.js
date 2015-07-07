import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'span',
  classNames: ['sc2iq-counter'],
  value: 0,

  actions: {
    incrementValue: function () {
      this.attrs['increment']();
    },
    decrementValue: function () {
      this.attrs['decrement']();
    }
  }
});
