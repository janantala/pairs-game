define([
	'backbone',

],
function(Backbone) {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'index'
		}
	});


	return Router;

});