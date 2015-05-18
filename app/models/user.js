import DS from 'ember-data';

export default DS.Model.extend({
  alias: DS.attr('string'),
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  provider: DS.attr('string')
});
