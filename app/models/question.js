import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  answer1: DS.attr('string'),
  answer2: DS.attr('string'),
  answer3: DS.attr('string'),
  answer4: DS.attr('string'),
  a: DS.attr('number', { defaultValue: 1 }),
  difficulty: DS.attr('number', { defaultValue: 2 }),
  state: DS.attr('string', { defaultValue: 'Pending' }),
  author: DS.belongsTo('user'),

  correctAnswer: Ember.computed('a', function (key, value) {
    var correctAnswerIndex = this.get('a');
    return this.get(`answer${correctAnswerIndex + 1}`);
  }),

  answers: Ember.computed('a', function (key, value) {
    return [this.get('answer1'), this.get('answer2'), this.get('answer3'), this.get('answer4')]
  })
});
