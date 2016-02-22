import DS from 'ember-data';

export default DS.Model.extend({
  q: DS.attr('string'),
  a1: DS.attr('string'),
  a2: DS.attr('string'),
  a3: DS.attr('string'),
  a4: DS.attr('string'),
  correctAnswerIndex: DS.attr('number', { defaultValue: 1 }),
  difficulty: DS.attr('number', { defaultValue: 2 }),
  state: DS.attr('string', { defaultValue: 'Pending' }),
  // author: DS.belongsTo('user'),

  correctAnswer: Ember.computed('correctAnswerIndex', function (key, value) {
    var correctAnswerIndex = this.get('correctAnswerIndex');
    return this.get(`a${correctAnswerIndex + 1}`);
  }),

  answers: Ember.computed('a', function (key, value) {
    return [this.get('a1'), this.get('a2'), this.get('a3'), this.get('a4')]
  })
});
