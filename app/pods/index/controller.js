import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    facebookLoginClicked() {
      this.login('facebook');
    },
    twitterLoginClicked() {
      this.login('twitter');
    },
    githubLoginClicked() {
      this.login('github');
    },
    googleLoginClicked() {
      this.login('google');
    }
  },

  login(provider) {
    this.get('session').authenticate('authenticator:firebase', { provider: provider });
  }

});
