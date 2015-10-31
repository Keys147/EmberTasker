import Ember from 'ember';

export default Ember.Route.extend({

	model(){
		return this.store.findAll('task');
	},
	actions : {
		saveStat(task,stat){
			let stats = task.get('stats');
			let currentStat = this.store.createRecord('stat',{
				entryAt: new Date(),
				time_spent: stat.time_spent,
				description: stat.description,
				task: task
			});
			var _this = this;
			currentStat.save().then(function(stat){
				task.get('stats').pushObject(stat);
			});
		}
	}
});
