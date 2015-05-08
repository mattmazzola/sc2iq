import Ember from 'ember';

export default Ember.Controller.extend({
  message: "",

  actions: {
    submitForm() {
      Ember.Logger.log("Comment: ", this.message);
    }
  }
});
