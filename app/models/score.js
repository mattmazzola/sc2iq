import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr('number'),
  duration: DS.attr('number'),
  datetime: DS.attr('date')
});
