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
        isCorrect: (this.get('question.a') === 1),
        text: this.get('question.answer1'),
      }),
      Ember.Object.create({
        isCorrect: (this.get('question.a') === 2),
        text: this.get('question.answer2'),
      }),
      Ember.Object.create({
        isCorrect: (this.get('question.a') === 3),
        text: this.get('question.answer3'),
      }),
      Ember.Object.create({
        isCorrect: (this.get('question.a') === 4),
        text: this.get('question.answer4'),
      }),
    ];
  }),

  actions: {
    submit() {
      this.sendAction('action', this.get('question'));
    },

    toggleProperty(property) {
      this.set(property, !this.get(property));
    }
  }
});
