import Ember from 'ember';
import Session from 'simple-auth/session';

export default Session.extend({
  currentUser: Ember.computed('secure.user_id', 'isAuthenticated', function() {
    let userId = this.get('secure.uid');
    let store = this.container.lookup('store:main');

    Ember.Logger.log(`loading user... ${userId}`);

    if(userId && this.get('isAuthenticated') ) {
      return store.find('user', userId);
    }
  })
});
