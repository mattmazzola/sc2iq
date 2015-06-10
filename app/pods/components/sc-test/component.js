import Ember from 'ember';
let computed = Ember.computed;

export default Ember.Component.extend({

  // Defaults
  answers: null,
  currentQuestionIndex: null,
  isFinished: false,
  isStarted: false,
  questions: null,
  timeElapsed: null,
  timerCommand: '',
  // Single line CP

  // Multiline CP
  currentQuestion: computed('currentQuestionIndex', function () {
    return this.questions.objectAt(this.get('currentQuestionIndex'));
  }),

  // Observers
  setup: Ember.on('init', function () {
    this.set('answers', []);
    this.set('isStarted', false);
    this.set('isFinished', false);
    this.set('timeElapsed', new Date());
    this.set('currentQuestionIndex', 0);
    this.set('timerCommand', '');
  }),

  // Actions
  actions: {
    restart() {
      this.setup();
      this.set('timerCommand', 'reset');
    },

    start() {
      this.set('isStarted', true);
      this.set('timerCommand', 'start');
    },

    submitAnswer(answerIndex, question) {
      let maxIndex = this.get('questions.length') - 1;

      if( maxIndex > this.get('currentQuestionIndex')) {
        this.answers.pushObject(Ember.Object.create({answer: answerIndex, question: question.toJSON(), time: null}));

        this.incrementProperty('currentQuestionIndex');
        this.set('timerCommand', 'read');
      }
      else if(maxIndex === this.get('currentQuestionIndex')) {
        this.set('timerCommand', 'pause');
        // this.set('timerCommand', 'read');
        this.set('isFinished', true);

        this.calulateScores();
      }
    },

    timerRead(time) {
      this.get('answers.lastObject').set('time', time);
      console.log(`timerRead`, time);
    },

    sendCommand(command) {
      if('string' !== typeof command && command.length > 0) {
        throw Error(`Command must be a non-empty string. You passed: ${command}`);
      }
      this.set('timerCommand', command);
    }
  },

  calulateScores() {

  }

});
