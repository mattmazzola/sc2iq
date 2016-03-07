import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.data.autheticated'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
