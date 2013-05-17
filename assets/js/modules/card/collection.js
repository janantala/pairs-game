define([
	'backbone',

	'app',
	'card/model'
],
function(Backbone, app, CardModel) {

	var CardCollection = Backbone.Collection.extend({
		model: CardModel,

		initialize: function() {
			// app.vent.on('bootstrap', this.loadPairs, this);
			this.loadPairs();
		},

		loadPairs: function(categoryJson) {
			this.url = 'assets/json/pairs.json';
			this.fetch();
		},

		parse: function(res) {
			
			var a = [];
			$.each(res, function(idx, card) {
				var copy = $.extend(true, {}, card);

				var order1 = Math.floor((Math.random()*100)+1);
				var order2 = Math.floor((Math.random()*100)+1);
				card.order = order1;
				copy.order = order2;

				a.push(card);
				a.push(copy);
			});

			return a;
		},

		comparator: function(card) {
			return card.get('order');
		}
	});


	return CardCollection;

});