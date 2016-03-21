import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(revision) {
      console.log(`Revision: ${revision}`);
    }
  }
});
