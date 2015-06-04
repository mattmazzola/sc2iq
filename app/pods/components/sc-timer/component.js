import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'span',
  classNames: ['sc2iq-timer'],

  command: null,
  isStarted: false,
  run: false,
  startTime: null,
  timeDifference: 0,
  offset: 0,
  interval: 10,

  commandDidChange: Ember.observer('command', function () {
    var command = this.get('command');
    var method = this[command];

    if('function' === typeof method) {
      method.call(this);
    }

    /**
     * If command is 'read'
     * clear the command so successive read commands
     * can still be detected as changes by observer
     */
    if(command === 'read') {
      this.set('command', '');
    }
  }),

  updateDisplayTime() {
    var timeDifference = (new Date() - this.get('startTime')) + this.get('offset');
    this.set('timeDifference', timeDifference);

    if(this.get('run')) {
      Ember.run.later(this, this.updateDisplayTime, this.get('interval'));
    }
  },


  start() {
    this.set('startTime', new Date());
    this.set('isStarted', true);
    this.set('run', true);
    this.updateDisplayTime();
  },

  pause() {
    this.set('run', false);
    this.read();
  },

  resume() {
    this.set('offset', this.get('timeDifference'));
    this.set('startTime', new Date());
    this.set('run', true);
    this.updateDisplayTime();
  },

  reset() {
    this.resetInner();
    /**
     * Work-around to force re-render of timeElapsed
     * Otherwise, ember may not render last change
     * of setting timeOffset to 0;
     */
    Ember.run.later(this, this.resetInner, 10);
  },

  resetInner() {
    this.set('run', false);
    this.set('isStarted', false);
    this.set('timeDifference', 0);
    this.set('offset', 0);
  },

  read() {
    var state = {
      startTime: this.get('startTime'),
      duration: this.get('timeDifference')
    };
    this.sendAction('action', state);
  }

});
