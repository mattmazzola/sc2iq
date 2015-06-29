import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  provider: DS.attr('string'),
  points: DS.attr('number'),
  votes: DS.attr('number'),
  rating: DS.attr('number')
});
