import FireBaseAuthenticator from 'sc2iq/authenticators/firebase'

export function initialize(container, application) {
  application.register('authenticator:firebase', FireBaseAuthenticator);
}

export default {
  name: 'firebaseauthenticator',
  initialize: initialize
};
