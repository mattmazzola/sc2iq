import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sc2iq-question-form', 'Integration | Component | sc2iq question form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{sc2iq-question-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#sc2iq-question-form}}
      template block text
    {{/sc2iq-question-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
