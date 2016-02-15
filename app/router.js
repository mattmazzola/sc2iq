import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('index', { path: '/' }, function() {
    this.route('questions');
    this.route('polls');
    this.route('scores');
    this.route('test');
    this.route('faqs');
    this.route('contact');
  });
});

export default Router;
