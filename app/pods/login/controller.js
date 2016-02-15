import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticateWithBattlenet() {
      this.get('session').authenticate('authenticator:torii', 'battlenet');
    }
  }
});
