import Ember from 'ember';

export default Ember.Component.extend({
  totalCorrect: Ember.computed('answers', function (key, value) {
    return this.get('answers').filter(answer => answer.get('isCorrect')).length;
  }),

  percentageCorrect: Ember.computed('totalCorrect', function (key, value) {
    return (this.get('answers.length') === 0 ) ? 0 : (this.get('totalCorrect') / this.get('answers.length'));
  }),

  totalPoints: Ember.computed('answers', function (key, value) {
    return this.get('answers')
      .filter(answer => answer.get('isCorrect'))
      .map(answer => answer.get('points'))
      .reduce((a,b) => a + b, 0)
    ;
  }),
});
