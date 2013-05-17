define([
	'jquery',
	'underscore',
	'backbone',
	'application/eventAggregator',
	'application/router'

], function($, _, Backbone, EventAggregator, Router) {

	/**
	 * @constructor
	 */
	var App = function() {
		// runCallback to manage module initializers
		this.runCallback = {};
		this.runCallback.deferred = new $.Deferred();
		this.runCallback.promise  = this.runCallback.deferred.promise();

		// store public properties
		this.vent = new EventAggregator();
		this.router = new Router();
	};


	//
	// INSTANCE methods
	//

	/**
	 * @param {Function} callback
	 */
	App.prototype.addInitializer = function(callback) {
		this.runCallback.promise.done(function(context, options) {
			callback.call(context, options);
		});
	};


	/**
	 * @param {Object} options
	 */
	App.prototype.fireInitializers = function(options) {
		this.runCallback.deferred.resolve(this, options);
	};


	/**
	 * @param {Object} options
	 */
	App.prototype.run = function(options) {
		this.trigger('run:before', options);
		this.fireInitializers(options);
		this.trigger('run:after', options);
	};


	_.extend(App.prototype, Backbone.Events);
	return App;

});