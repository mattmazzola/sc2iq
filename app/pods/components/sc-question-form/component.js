import Ember from 'ember';

export default Ember.Component.extend({
	isExpanded: false,

	question: {
		text: '',
		answer1: '',
		answer2: '',
		answer3: '',
		answer4: '',
		difficulty: 1,
		tags: null
	},

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
      console.log("submit");
      this.sendAction('action', this.get('question'));
			this.resetModel();
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
		this.set('question.text', '');
		this.set('question.answer1', '');
		this.set('question.answer2', '');
		this.set('question.answer3', '');
		this.set('question.answer4', '');
		this.set('question.difficulty', 1);
		this.set('question.tags', []);
	}
});
