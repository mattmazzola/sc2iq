import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  isEditMode: false,

  isCurrentUserAdmin: computed('user', function(key, value) {
    return (this.get('user.role') === 'admin');
  }),

  answers: computed('question', function (key, value) {
    return [
      Ember.Object.create({
        isCorrect: (this.get('question.correctAnswerIndex') === 1),
        text: this.get('question.a1'),
      }),
      Ember.Object.create({
        isCorrect: (this.get('question.correctAnswerIndex') === 2),
        text: this.get('question.a2'),
      }),
      Ember.Object.create({
        isCorrect: (this.get('question.correctAnswerIndex') === 3),
        text: this.get('question.a3'),
      }),
      Ember.Object.create({
        isCorrect: (this.get('question.correctAnswerIndex') === 4),
        text: this.get('question.a4'),
      }),
    ];
  }),

  actions: {
    submit() {
      this.sendAction('action', this.get('question'));
    },

    toggleProperty(property) {
      this.toggleProperty(property);
    }
  }
});
