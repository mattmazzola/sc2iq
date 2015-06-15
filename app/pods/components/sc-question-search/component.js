import Ember from 'ember';

export default Ember.Component.extend({

  // Defaults
  isExpanded: false,
  querytext: '',
  difficultyMin: 0,
  difficultyMax: 10,

  // Singleline CP

  // Multiline CP

  // Observers

  // Actions
	actions: {
		toggle() {
			this.toggleProperty('isExpanded');
		},

		expand() {
			this.set('isExpanded', true);
		},

		reset() {
			this.resetModel();
			this.collapse();
		},

    submit() {
      this.sendAction('action', this.get('querytext'));
			this.collapse();
    }
	},

	collapse() {
		this.set('isExpanded', false);
	},

	init() {
		this._super();
		this.resetModel();
	},

	resetModel() {
		this.set('querytext', '');
	}
});
