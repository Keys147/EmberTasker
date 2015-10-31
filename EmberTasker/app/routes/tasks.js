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
		}
	}



});
