'use strict';

define(
       ['app/component_ui/sillyButton'],

       function(SillyButton){

	   function initialize() {
	       console.log('init');
	       SillyButton.attachTo('#new_item');
	   }

	   return initialize;
       }
);