require([
	// libs, core
	'jquery', 'underscore', 'backbone', 'app', 'domReady',

	// functional units
	'card'

], function($, _, Backbone, app, dom) {

	$.ajaxSetup({
		headers: {
			'Accept'			: 'application/json',
			'X-Requested-With'	: 'XMLHttpRequest'
		},
		cache: false
	});

	app.on('run:after', function(options) {
		Backbone.history.start();
	});

	window.addEventListener('orientationchange', function () {
		// app.vent.trigger('removeCloud');
	});

	window.addEventListener('resize', function () {
		// app.vent.trigger('removeCloud');
	});



	app.run();


	setTimeout( function () {
		window.scrollTo(0, 1);
	}, 100);

});