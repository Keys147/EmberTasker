import Ember from 'ember';

export default Ember.Component.extend({
	time_spent: '',
	description: '',
	stats: function(){
		return DS.PromiseObject.create({
    		promise: this.get('task.stats')
 	 });
	}.property('task'),
	tagName:'section',
	classNameBindings:['task-details-container'],
	actions: {
		saveStat(){
			this.sendAction('saveStat', this.get('task'), {
				time_spent: this.get('time_spent'),
				description: this.get('description')
			});
		}
	}
});
