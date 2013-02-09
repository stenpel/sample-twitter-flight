'use strict';

define(
       ['components/flight/lib/component'],
       
       function(defineComponent) {

	   return defineComponent(sillyButton);

	   function sillyButton() {
	       this.after('initialize', function() {
		       console.log('init sillyButton',this);
		   });
	   }
       }
);