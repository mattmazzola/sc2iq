/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sc2iq',
    podModulePrefix: 'sc2iq/pods',
    environment: environment,
    firebase: 'https://sc2iq.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' localhost:35729 d2zah9y47r7bi2.cloudfront.net",
      'font-src': "'self' https://fonts.gstatic.com",
      'connect-src': "'self' wss://*.firebaseio.com https://auth.firebase.com/ https://capture.trackjs.com",
      'img-src': "'self' data: https://usage.trackjs.com",
      'report-uri': "'localhost'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'frame-src': "https://*.firebaseio.com/"
    },

    'simple-auth': {
      authenticationRoute: 'index',
      // authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['*'],
      store: 'simple-auth-session-store:local-storage',
      session: 'session:custom'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
