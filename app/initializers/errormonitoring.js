import Ember from 'ember';

export function initialize(/*container, app */) {
  Ember.onerror = (err) => {
    logError(err);
  };
  Ember.RSVP.on('error', (err) => {
    logError(err);
  });
}

var convertToError = (error) => {
  if (Ember.typeOf(error) === 'object') {
    var message = error.responseText || error.message || error.toString();
    var status = error.status;
    error = new Error(message);
    
    if (status) {
      error.status = status;
    }
  }

  return error;
};

export function logError(errorLikeObject) {
  // Ensure that error is an instance of Error
  let error = convertToError(errorLikeObject);

  // // Log in trackJs (prod only)
  // trackJs.track(err);

  // Log to console (dev only)
  Ember.Logger.assert(false, error);
}

export default {
  name: 'errormonitoring',
  initialize: initialize
};
