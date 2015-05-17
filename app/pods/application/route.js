import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  actions: {
    // sessionRequiresAuthentication() {
    //   console.log("sessionRequiresAuthentication");
    //   return this.super();
    // },
    // sessionAuthenticationSucceeded() {
    //   console.log("sessionAuthenticationSucceeded");
    //   return this._super();
    // },
    sessionAuthenticationFailed(error) {
      console.error(error.message);
      return this._super();
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});
