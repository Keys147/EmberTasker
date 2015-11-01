import Ember from 'ember';

export default Ember.Route.extend({
	model(){
			return this.store.filter('task', function(task) {
			var days = 2; // Days you want to subtract
			var now = new Date();
			var midnight = new Date(now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0);
			var createdAt = new Date(task.get('createdAt'))
			console.log(createdAt.getTime() +":"+ midnight.getTime() +"::::" + (createdAt.getTime() > midnight.getTime()));
            return (createdAt.getTime() > midnight.getTime());
        });
	},
	renderTemplate(controller, model) {
        this.render('tasks.index', {
            model: model
        });
    }
});
