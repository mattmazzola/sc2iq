import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.filter('question', {}, () => true)
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
    //return this._super.apply(this, arguments);
  }
});
