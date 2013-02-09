'use strict';

define(
       ['components/flight/lib/component'],
       
       function(defineComponent) {

	   return defineComponent(sillyButton);

	   function sillyButton() {
	       this.setNewEntry = function(e){
		   console.log('setNewEntry');
		   this.trigger('postItemSended', {title:'断捨離ｗ',body:'一ヶ月塩麹だけで生活するｗｗｗ'});
	       };
	       
	       this.after('initialize', function() {
		       console.log('init sillyButton');
		       this.on('click', this.setNewEntry);
	       });
	   }
       }
);