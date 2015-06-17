import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', function() {
    this.route('question', { path: '/:question_id'});
    this.route('loading');
    this.route('error');
  });
  this.route('scores', function () {
    this.route('high');
    this.route('me');
  });
  this.route('contact');
  this.route('polls', function() {
    this.route('poll', { path: '/:poll_id'});
  });
  this.route('test');
});

export default Router;
