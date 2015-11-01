import Ember from 'ember';

export default Ember.Route.extend({

	model(){

		return this.store.findAll('task');

	},

	actions:{

		createTask(newTitle){

			this.store.createRecord('task',{

				title:newTitle,
				complete:false

			}).save();

		},

		updateTask(task){
			task.save();
		},

		deleteTask(task){
			task.destroyRecord();
		},
		saveStat(task,stat){
			let stats = task.get('stats');
			let currentStat = this.store.createRecord('stat',{
				entryAt: new Date(),
				timeSpent: stat.timeSpent,
				description: stat.description,
				task: task
			});
			var _this = this;
			task.get('stats').then(function(stats){
				stats.addObject(currentStat);
				task.save().then(function(){
					currentStat.save()
				})
			});
		}
	}



});
