import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('questions', function() {
    this.route('question', { path: '/:question_id'});
    this.route('loading');
    this.route('error');
  });
  this.route('scores');
  this.route('contact');
  this.route('polls');
  this.route('test');
});
