define([
	'jquery',
	'underscore',
	'backbone',

	'app',
	'card/collection',
	'card/itemView'
],
function($, _, Backbone, app, CardCollection, CardItemView) {

	var CardView = Backbone.View.extend({
		el: '#playground',

		initialize: function() {
			_.bindAll(this, 'onCollectionReady', 'showImg');
			this.collection.on('reset', this.onCollectionReady, this);
			app.vent.on('showImg', this.showImg, this);
			app.vent.on('removeImg', this.removeImg, this);

			this.counter = 0;
			this.removed = 0;
			this.lastCard = undefined;
		},

		onCollectionReady: function() {
			var that = this;
			$(this.el).html('');
			this.collection.each(function(model, idx) {
				var itemView = new CardItemView({ model:model });
				that.$el.append(itemView.render());
			});

			this.start = new Date().getTime();
		},

		showImg: function(data) {
			this.counter++;

			if (this.counter % 2 === 1) {
				lastCard = data.cardID;
			}

			if ((this.counter > 1) && (this.counter % 2 === 1)) {
				app.vent.trigger('hideImg');
			}
			else if ((this.counter > 1) && (this.counter % 2 === 0)) {
				if ((lastCard) && (lastCard == data.cardID)) {
					app.vent.trigger('removeImg', {'cardID': data.cardID});
				}

				lastCard = undefined;
			}
		},

		removeImg: function() {
			this.removed++;
			var that = this;
			
			if (this.removed * 2 == _.size(this.collection)) {
				this.end = new Date().getTime();
				window.setTimeout(function(){
					that.time = that.end - that.start;
					console.log((that.time / 1000) + ' s');
					console.log(that.counter);
					alert('Complete');
				}, 600);
			}
		}
	});


	return CardView;

});