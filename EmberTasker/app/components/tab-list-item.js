import Ember from 'ember';

export default Ember.Component.extend({
	
tagName:'li',
 attributeBindings: ['data-content'],

click(){

this.$().addClass('tab-current');
this.$().siblings().removeClass('tab-current');
var contentID=this.$().data('content');
this.$().closest('nav').siblings('.content-container').each(function(){

if($(this).attr('id')== contentID )

{
	$(this).addClass('current-content');
	$(this).siblings().removeClass('current-content');
}

})
}
	




					
	

	 
});
