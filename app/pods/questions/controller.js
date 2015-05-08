import Ember from 'ember';

export default Ember.Controller.extend({
  newQuestion: null,
  tags: null,
  tagsQueryText: "",
  tagsTimeoutId: 0,
  filteredTags: null,

  isQuestionsLoading: false,
  currentOffset: 0,
  currentPageSize: 3,
  isFirstPage: true,
  isLastPage: false,

  init(){
    this.set("newQuestion", this.store.createRecord("question", {
    }));
    this.set("tags", []);
    this.set("filteredTags", []);
  },

  actions: {
    submitQustionClicked() {
      Ember.Logger.log("submitQuetsionClicked");
    }
  },

  submitQuestion(){
    var newQuestion = this.get("newQuestion");
    Ember.Logger.log("newQuestion: ", newQuestion.toJSON());
    return newQuestion.save();
  }

});
