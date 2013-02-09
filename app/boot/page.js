'use strict';

define(
       ['app/component_ui/sillyButton',
	'app/component_data/simplePost',
	'app/component_ui/sillyPosts'
	],

       function(SillyButton,SimplePost,SillyPosts){

	   function initialize() {
	       console.log('init');
	       SimplePost.attachTo(document);
	       SillyButton.attachTo('#new_item');
	       SillyPosts.attachTo('#post_list');
	   }

	   return initialize;
       }
);