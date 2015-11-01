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
			let currentStat = this.store.createRecord('stat',{
				entryAt: new Date(),
				timeSpent: stat.timeSpent,
				description: stat.description,
			});
			var _this = this;
			task.get('stats').then(function(stats){
				stats.addObject(currentStat);
				currentStat.save().then(function(){
					task.save()
				});
			});
		}
	}



});
