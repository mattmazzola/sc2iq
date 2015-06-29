import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  actions: {
    // sessionRequiresAuthentication() {
    //   console.log("sessionRequiresAuthentication");
    //   return this.super();
    // },
    sessionAuthenticationSucceeded() {
      var secureSessionContent = this.get('session.content.secure');
      return this.saveUserIfNotFound(secureSessionContent);
    },
    sessionAuthenticationFailed(error) {
      throw new Error(error.message);
    },
    logout() {
      this.get('session').invalidate();
    }
  },

  saveUserIfNotFound(secureSessionContent) {
    return this.store.find('user', secureSessionContent.uid)
      .then(null, error => {
        var userInfo = this.extractUserFromSession(secureSessionContent);
        Ember.Logger.log(`System could not find user: ${user.displayName}. Saving user...`);
        var newUser = this.store.createRecord('user', userInfo);
        return newUser.save();
      })
    ;
  },

  extractUserFromSession(secureSessionContent) {
    var user = {
      id: secureSessionContent.uid,
      provider: secureSessionContent.provider,
      points: 0,
      votes: 0,
      rating: 0,
    };

    if(secureSessionContent.github) {
      user.displayName = secureSessionContent.github.displayName;
    }
    else if(secureSessionContent.facebook) {
      user.displayName = secureSessionContent.facebook.displayName;
    }
    else if(secureSessionContent.twitter) {
      user.displayName = secureSessionContent.twitter.displayName;
    }
    else if(secureSessionContent.google) {
      user.displayName = secureSessionContent.google.displayName;
    }

    return user;
  }
});
