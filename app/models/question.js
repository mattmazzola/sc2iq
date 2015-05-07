import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  answer1: DS.attr('string')
});
