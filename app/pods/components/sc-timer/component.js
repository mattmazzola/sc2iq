import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'span',
  classNames: ['sc2iq-timer'],

  isStarted: false,
  run: false,
  startTime: null,
  timeDifference: 0,
  offset: 0,
  interval: 10,

  updateDisplayTime() {
    var timeDifference = (new Date() - this.get('startTime')) + this.get('offset');
    this.set('timeDifference', timeDifference);

    if(this.get('run')) {
      Ember.run.later(this, this.updateDisplayTime, this.get('interval'));
    }
  },

  reset() {
    this.set('run', false);
    this.set('isStarted', false);
    this.set('timeDifference', 0);
    this.set('offset', 0);
  },

  actions: {
    start() {
      this.set('startTime', new Date());
      this.set('isStarted', true);
      this.set('run', true);
      this.updateDisplayTime();
    },

    pause() {
      this.set('run', false);
    },

    resume() {
      this.set('offset', this.get('timeDifference'));
      this.set('startTime', new Date());
      this.set('run', true);
      this.updateDisplayTime();
    },

    reset() {
      this.reset();
      /**
       * Work-around to force re-render of timeElapsed
       * Otherwise, ember may not render last change
       * of setting timeOffset to 0;
       */
      Ember.run.later(this, this.reset, 10);
    },

    read() {
      var state = {
        startTime: this.get('startTime'),
        duration: this.get('timeDifference')
      }
      this.sendAction('action', state);
    }
  }

});
