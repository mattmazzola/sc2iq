import Ember from 'ember';
let computed = Ember.computed;

export default Ember.Component.extend({

  // Defaults
  answers: null,
  currentQuestionIndex: null,
  isFinished: false,
  isStarted: false,
  isTestDetailsVisible: false,
  keyUp: null,
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

    var isTestRunning = () => ((this.get('isStarted') === true) && (this.get('isFinished') === false));
    var isBeforeStart = () => (this.get('isStarted') === false) && (this.get('isFinished') === false);

    var submitAnswer1 = () => {
      if(isTestRunning()) {
        this.submitAnswer(1, this.get('currentQuestion'));
      }
    };
    var submitAnswer2 = () => {
      if(isTestRunning()) {
        this.submitAnswer(2, this.get('currentQuestion'));
      }
    };
    var submitAnswer3 = () => {
      if(isTestRunning()) {
        this.submitAnswer(3, this.get('currentQuestion'));
      }
    };
    var submitAnswer4 = () => {
      if(isTestRunning()) {
        this.submitAnswer(4, this.get('currentQuestion'));
      }
    };
    var beginTest = () => {
      if(isBeforeStart()) {
        this.startTest();
      }
    };

    var keyUpEventToActionMap = {};
    keyUpEventToActionMap['49'] = submitAnswer1;
    keyUpEventToActionMap['97'] = submitAnswer1;
    keyUpEventToActionMap['50'] = submitAnswer2;
    keyUpEventToActionMap['98'] = submitAnswer2;
    keyUpEventToActionMap['51'] = submitAnswer3;
    keyUpEventToActionMap['99'] = submitAnswer3;
    keyUpEventToActionMap['52'] = submitAnswer4;
    keyUpEventToActionMap['100'] = submitAnswer4;
    keyUpEventToActionMap['66'] = beginTest;

    this.set('keyUp', this.generateKeyHandler(keyUpEventToActionMap));
  }),

  setupKeyBindings: Ember.on('didInsertElement', function () {
    this.$(document).on('keyup', { _self: this }, this.keyUp);
  }),

  tearDownKeyBindings: Ember.on('willDestroyElement', function () {
    this.$(document).off('keyup', this.keyUp);
    this.set('keyUp', null);
  }),

  generateKeyHandler: function (eventToActionMap) {
    var controller = this;
    return function (event) {
      if (eventToActionMap.hasOwnProperty(event.which)) {
        var action = eventToActionMap[event.which];
        if(typeof action === "function") {
          action.call(controller);
        }
      }
    };
  },

  // Actions
  actions: {
    restart() {
      this.setup();
      this.resetTimer();
    },

    startClicked() {
      this.startTest();
    },

    submitAnswerClicked(answerIndex, question) {
      this.submitAnswer(answerIndex, question);
    }
  },

  calulateScores() {

  },

  startTest() {
    this.set('isStarted', true);
    this.startTimer();
  },

  startTimer() {
    this.set('startTime', new Date());
    this.set('isTimerStarted', true);
    this.set('run', true);
    this.updateDisplayTime();
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
