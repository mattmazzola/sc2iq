import Ember from 'ember';

export function initialize(/*container, app */) {
  Ember.onerror = (err) => {
    logError(err);
  };
  Ember.RSVP.on('error', (err) => {
    logError(err);
  });
}

export function logError(err) {
  // // Log in trackJs (prod only)
  // trackJs.track(err);

  // Log to console (dev only)
  Ember.Logger.assert(false, err);
}

export default {
  name: 'errormonitoring',
  initialize: initialize
};
