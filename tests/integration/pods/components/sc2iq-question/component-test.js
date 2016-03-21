import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sc2iq-question', 'Integration | Component | sc2iq question', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{sc2iq-question}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#sc2iq-question}}
      template block text
    {{/sc2iq-question}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
