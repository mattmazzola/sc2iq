import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  points: DS.attr('number'),
  imageUrl: DS.attr('string'),
  provider: DS.attr('string'),
  rating: DS.attr('number'),
  role: DS.attr('string'),
  votes: DS.attr('number')
});
