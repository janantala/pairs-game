define([
	'jquery',
	'underscore',
	'backbone',

	'app'
],
function($, _, Backbone, app) {

	var CardItemView = Backbone.View.extend({
		tagname: 'div',
		className: 'card',
		events: {
			'click': 'showImg'
		},
		initialize: function (data)
		{
			_.bindAll(this, 'render', 'showImg', 'hideImg', 'removeImg');
			app.vent.on('hideImg', this.hideImg, this);
			app.vent.on('removeImg', this.removeImg, this);
		},

		render: function() {
			$(this.el).html('<img src="' + this.model.get('cover') + '"/>');

			return this.el;
		},

		showImg: function() {
			var that = this;
			
			if ((!this.isVisible) && (!this.isRemoved)) {
				$(this.el).html('<img src="' + this.model.get('img') + '"/>');
				app.vent.trigger('showImg', {'cardID': this.model.get('cardID')});
				window.setTimeout(function(){
					that.isVisible = true;
				}, 100);
				
			}
		},

		hideImg: function() {
			if ((this.isVisible) && (!this.isRemoved)) {
				$(this.el).html('<img src="' + this.model.get('cover') + '"/>');
				this.isVisible = false;
			}
		},

		removeImg: function(data) {
			var that = this;
			
			if (this.model.get('cardID') === data.cardID) {
				this.isVisible = false;
				this.isRemoved = true;

				window.setTimeout(function(){
					$(that.el).html('');
				}, 500);
			}
		}
	});


	return CardItemView;

});