'use strict';

define(
       ['components/flight/lib/component'],

       function(defineComponent) {
	   return defineComponent(simplePost);

	   function simplePost() {
	       this.data = [];
	       this.catchData = function(e, data){
		   this.data.push(data);
		   var html = this.renderPost(data);
		   this.trigger("postItemServed", {html: html});
	       }
	       this.renderPost = function(data){
		   return "<div class=title>" + data.title + "</div><div class=body>" + data.body + "</div>";
	       }
	       this.after('initialize', function() {
		   this.on('postItemSended', this.catchData);
	       });
	   }
       }
);