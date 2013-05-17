define([
	'app',
	'card/model',
	'card/collection',
	'card/itemView',
	'card/view',

	'domReady!'
],
function(app, CardModel, CardCollection, CardItemView, CardView, dom) {
	app.addInitializer(function(options) {
		var collection = new CardCollection();
		var view = new CardView({ collection: collection });
	});
});