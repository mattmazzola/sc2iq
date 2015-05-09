import Ember from 'ember';

export function initialize(/*container, app */) {
  Ember.onerror = (err) => {
    logError(err);
  };
  Ember.RSVP.on('error', (err) => {
    logError(err);
  });
}

var convertToError = (errorLikeObject) => {
    if (Ember.typeOf(errorLikeObject) === 'object') {
        var message = errorLikeObject.responseText || errorLikeObject.message || errorLikeObject.toString();
        var status = errorLikeObject.status;
        var error = new Error(message);
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
