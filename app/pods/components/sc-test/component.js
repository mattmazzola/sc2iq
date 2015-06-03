import Ember from 'ember';
let computed = Ember.computed;

export default Ember.Component.extend({

  // Defaults
  currentQuestionIndex: null,
  isFinished: false,
  isStarted: false,
  questions: null,
  timeElapsed: null,

  // Single line CP

  // Multiline CP
  currentQuestion: computed('currentQuestionIndex', function () {
    return this.questions.objectAt(this.get('currentQuestionIndex'));
  }),

  // Observers
  setup: Ember.on('init', function () {
    this.set('isStarted', false);
    this.set('isFinished', false);
    this.set('timeElapsed', new Date());
    this.set('currentQuestionIndex', 0);
  }),

  // Actions
  actions: {
    quit() {
      this.setup();
    },

    restart() {
      this.setup();
      this.set('isStarted', true);
    },

    start() {
      this.set('isStarted', true);
    },

    submitAnswer() {
      let maxIndex = this.get('questions.length') - 1;

      if( maxIndex > this.get('currentQuestionIndex')) {
        this.incrementProperty('currentQuestionIndex');
      }
      else if(maxIndex === this.get('currentQuestionIndex')) {
        this.set('isFinished', true);
      }
    },

    log(x) {
      console.log(`log`, x);
    }
  }

});
