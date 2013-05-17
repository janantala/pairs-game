require.config({
	urlArgs: 'bust=' + (new Date()).getTime(),
	baseUrl: 'assets/js/modules',

	paths: {
		// libs
		'domReady'			: '../libs/domready',
		'jquery'			: '../libs/jquery.min',
		'underscore'		: '../libs/lodash.min',
		'backbone'			: '../libs/backbone-amd.min'
	},

	shim: {

	},

	deps: ['../bootstrap']

});