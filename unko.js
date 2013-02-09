require(
       [
	'components/flight/lib/component'
	],

       function(defineComponent) {

	   require(['app/boot/page'], function(initialize){
		   initialize();
	       });
       }
);