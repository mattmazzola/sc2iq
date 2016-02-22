import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('index', { path: '/' }, function() {
    this.route('questions', function() {
      this.route('error');
      this.route('loading');
      this.route('question', { path: '/:question_id'});
    });
    this.route('polls');
    this.route('scores');
    this.route('test');
    this.route('faqs');
    this.route('contact');
    this.route('profile', { path: '/profile/:user_id' });
  });
});

export default Router;
