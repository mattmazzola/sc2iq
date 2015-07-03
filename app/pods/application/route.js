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
    },

    saveUserProfile(userInfo) {
      Ember.Logger.log(`applicationRoute#saveUserProfile: ${userInfo}`);

      this.store.find('user', userInfo.get('uid'))
        .then(user => {
          user.setProperties(userInfo);
          user.save();
        });
    }
  },

  saveUserIfNotFound(secureSessionContent) {
    return this.store.find('user', secureSessionContent.uid)
      .then(null, () => {
        var userInfo = this.extractUserFromSession(secureSessionContent);
        Ember.Logger.log(`System could not find user: ${userInfo.displayName}. Saving user...`);
        var newUser = this.store.createRecord('user', userInfo);
        return newUser.save();
      })
    ;
  },

  extractUserFromSession(secureSessionContent) {
    var user = {
      uid: secureSessionContent.uid,
      imageUrl: '',
      provider: secureSessionContent.provider,
      points: 0,
      level: 1,
      votesSpendable: 0,
      votesTotal: 0,
      rating: 0,
    };

    if(secureSessionContent.github) {
      user.displayName = secureSessionContent.github.displayName;
    }
    else if(secureSessionContent.facebook) {
      user.displayName = secureSessionContent.facebook.displayName;
      user.imageUrl = secureSessionContent.facebook.cachedUserProfile.picture.data.url;
    }
    else if(secureSessionContent.twitter) {
      user.displayName = secureSessionContent.twitter.displayName;
      user.imageUrl = secureSessionContent.twitter.cachedUserProfile.profile_image_url_https;
    }
    else if(secureSessionContent.google) {
      user.displayName = secureSessionContent.google.displayName;
    }

    return user;
  }
});
