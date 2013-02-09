'use strict';

define(
       ['components/flight/lib/component'],

       function(defineComponent) {
	   
	   return defineComponent(sillyPosts);

	   function sillyPosts() {
	       this.renderPosts = function(e, data){
		   this.$node.append("<li>" + data.html + "</li>");
	       }
	       this.after('initialize', function() {
		       console.log('init sillyPosts');
		       this.on(document, 'postItemServed', this.renderPosts);
	       });
	   }
       }
);