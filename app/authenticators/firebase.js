import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from '../config/environment';
import Firebase from 'firebase';

var firebase = new Firebase(config.firebase);
let allowedProviders = ["facebook", "twitter", "github", "google"];

export default Base.extend({
  authenticate(config) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(!config.hasOwnProperty('provider') || 'string' !== typeof config.provider) {
        return reject(`You must pass a provider name when authenticating with firebase.  Available providers are: ${allowedProviders.join(',')}. You passe: ${config.provider}`);
      }

      if(allowedProviders.indexOf(config.provider) === -1) {
        return reject(`You must choose a provider from the available providers: ${allowedProviders.join(', ')}. You passed: ${config.provider}`);
      }

      firebase.authWithOAuthPopup(config.provider, (error, response) => {
          return error ? reject(error) : resolve(response);
      });
    });
  },
  invalidate(session) {
    return Ember.RSVP.resolve(firebase.unauth());
  },
  restore(data) {
    return Ember.RSVP.resolve(data);
  }
});
