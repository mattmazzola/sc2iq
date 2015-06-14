import Ember from 'ember';
let computed = Ember.computed;

export default Ember.Component.extend({

  // Defaults
  answers: null,
  currentQuestionIndex: null,
  isFinished: false,
  isStarted: false,
  isTestDetailsVisible: false,
  questions: null,

  // Timer Component
  isTimerStarted: false,
  run: false,
  startTime: null,
  timeDifference: 0,
  offset: 0,
  interval: 10,

  // Single line CP

  // Multiline CP
  currentQuestion: computed('currentQuestionIndex', function () {
    return this.questions.objectAt(this.get('currentQuestionIndex'));
  }),

  // Observers
  setup: Ember.on('init', function () {
    this.set('answers', []);
    this.set('isStarted', false);
    this.set('isTimerStarted', false);
    this.set('isFinished', false);
    this.set('currentQuestionIndex', 0);
  }),

  // Actions
  actions: {
    restart() {
      this.setup();
      this.resetTimer();
    },

    start() {
      this.set('isStarted', true);
      this.startTimer();
    },

    submitAnswer(answerIndex, question) {
      let maxIndex = this.get('questions.length') - 1;

      // If we're not on the last question, save the answer and go to next question.
      if( maxIndex > this.get('currentQuestionIndex')) {
        this.answers.pushObject(Ember.Object.create({
          isCorrect: (answerIndex === (question.get('a') + 1)),
          answer: answerIndex,
          question: question,
          time: this.get('timeDifference'),
          duration: 0,
          points: 0
        }));

        this.incrementProperty('currentQuestionIndex');
      }
      // If we're on the last question pause timer, set finished.
      else if(maxIndex === this.get('currentQuestionIndex')) {
        this.pauseTimer();
        this.set('isFinished', true);
        this.calulateScores();
      }
    }
  },

  calulateScores() {

  },


  startTimer() {
    this.set('startTime', new Date());
    this.set('isTimerStarted', true);
    this.set('run', true);
    this.updateDisplayTime();
  },

  pauseTimer() {
    this.set('run', false);
  },

  resumeTimer() {
    this.set('offset', this.get('timeDifference'));
    this.set('startTime', new Date());
    this.set('run', true);
    this.updateDisplayTime();
  },

  resetTimer() {
    this.set('run', false);
    this.set('isTimerStarted', false);
    this.set('timeDifference', 0);
    this.set('offset', 0);
  },

  updateDisplayTime() {
    var timeDifference = (new Date() - this.get('startTime')) + this.get('offset');
    this.set('timeDifference', timeDifference);

    if(this.get('run')) {
      Ember.run.later(this, this.updateDisplayTime, this.get('interval'));
    }
  }
});
