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

      this.saveUserIfNotFound(secureSessionContent);
    },
    sessionAuthenticationFailed(error) {
      console.error(error.message);
    },
    logout() {
      this.get('session').invalidate();
    }
  },

  saveUserIfNotFound(secureSessionContent) {
    return this.store.find('user', secureSessionContent.uid)
      .then(user  => {
        Ember.Logger.log(`Found user: ${user}`);
        return user;
      }, (error) => {
        Ember.Logger.log(`Couldn't find user: ${user}`);
        var user = this.extractUserFromSession(secureSessionContent);

        var newUser = this.store.createRecord('user', user);
        return newUser.save();
      })
    ;
  },

  extractUserFromSession(secureSessionContent) {
    var user = {
      id: secureSessionContent.uid,
      provider: secureSessionContent.provider
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
