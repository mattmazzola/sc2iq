import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  actions: {
    // sessionRequiresAuthentication() {
    //   console.log("sessionRequiresAuthentication");
    //   return this.super();
    // },
    sessionAuthenticationSucceeded() {
      console.log("sessionAuthenticationSucceeded: ", this.get('session.content'));
    },
    sessionAuthenticationFailed(error) {
      console.error(error.message);
    },
    logout() {
      this.get('session').invalidate();
    }
  },

  setUserOnSession() {

  }
});
