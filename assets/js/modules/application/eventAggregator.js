define([
	'underscore',
	'backbone'

], function(_, Backbone) {

	/**
	 * A pub/sub object that is used to decouple various parts of an application through event-driven architecture
	 *
	 * @constructor
	 */
	var EventAggregator = function() {};
	_.extend(EventAggregator.prototype, Backbone.Events);

	return EventAggregator;

});