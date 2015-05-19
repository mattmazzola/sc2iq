import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,

  poll: {
    title: '',
    description: '',
    votes: 0
  },

  actions: {
		expand() {
			this.set('isExpanded', true);
		},
		reset() {
			this.resetModel();
      this.set('isExpanded', false);
		},

    submit() {
      this.sendAction('action', this.get('poll'));
			this.resetModel();
      this.set('isExpanded', false);
    }
	},

  resetModel() {
		this.set('poll.title', '');
		this.set('poll.description', '');
		this.set('poll.votes', '');
	}
});
