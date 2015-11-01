import Ember from 'ember';

export default Ember.Component.extend({
	time_spent: '',
	description: '',
	tagName:'section',
	classNameBindings:['task-details-container'],
	actions: {
		saveStat(){
			this.sendAction('saveStat', this.get('task'), {
				timeSpent: this.get('time_spent'),
				description: this.get('description')
			});
		}
	}
});
