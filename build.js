({

	//The top level directory that contains your app. If this option is used
	//then it assumed your scripts are in a subdirectory under this path.
	//This option is not required. If it is not specified, then baseUrl
	//below is the anchor point for finding things. If this option is specified,
	//then all the files from the app directory will be copied to the dir:
	//output area, and baseUrl will assume to be a relative path under
	//this directory.
	appDir: ".",

	//By default, all modules are located relative to this path. If baseUrl
	//is not explicitly set, then all modules are loaded relative to
	//the directory that holds the build file. If appDir is set, then
	//baseUrl should be specified as relative to the appDir.
//	baseUrl: "./js",

    //The directory path to save the output. If not specified, then
    //the path will default to be a directory called "build" as a sibling
    //to the build file. All relative paths are relative to the build file.
    dir: "./build",

	//By default all the configuration for optimization happens from the command
	//line or by properties in the a config file, and configuration that was
	//passed to requirejs as part of the app's runtime "main" JS file is *not*
	//considered. However, if you prefer for the that "main" JS file configuration
	//to be read for the build so that you do not have to duplicate the values
	//in a separate configuration, set this property to the location of that
	//main JS file. The first requirejs({}), require({}), requirejs.config({}),
	//or require.config({}) call found in that file will be used.
	mainConfigFile: 'assets/js/config.js',

	//Skip processing for pragmas.
	// skipPragmas: true,

	//List the modules that will be optimized. All their immediate and deep
	//dependencies will be included in the module's file when the build is
	//done. If that module or any of its dependencies includes i18n bundles,
	//only the root bundles will be included unless the locale: section is set above.
	modules: [
		//Just specifying a module name means that module will be converted into
		//a built file that contains all of its dependencies. If that module or any
		//of its dependencies includes i18n bundles, they may not be included in the
		//built file unless the locale: section is set above.
		{
			name: "../bootstrap"
		}

		//This module entry combines all the dependencies of foo/bar/bop and foo/bar/bee
		//and any of their dependencies into one file.
//		{
//			name: "foo/bar/bop",
//			include: ["foo/bar/bee"]
//		},

		//This module entry combines all the dependencies of foo/bar/bip into one file,
		//but excludes foo/bar/bop and its dependencies from the built file. If you want
		//to exclude a module that is also another module being optimized, it is more
		//efficient if you define that module optimization entry before using it
		//in an exclude array.
//		{
//			name: "foo/bar/bip",
//			exclude: [
//				"foo/bar/bop"
//			]
//		},

		//This module entry shows how to specify a specific module be excluded
		//from the built module file. excludeShallow means just exclude that
		//specific module, but if that module has nested dependencies that are
		//part of the built file, keep them in there. This is useful during
		//development when you want to have a fast bundled set of modules, but
		//just develop/debug one or two modules at a time.
//		{
//			name: "foo/bar/bin",
//			excludeShallow: [
//				"foo/bar/bot"
//			]
//		}
	],

	optimize: "uglify",
	uglify: {			// See https://github.com/mishoo/UglifyJS for the possible values.
		toplevel		: false,
		beautify		: false,
		max_line_length	: 1000
	},

	// 0: TRACE
	// 1: INFO
	// 2: WARN
	// 3: ERROR
	// 4: SILENT
	logLevel: 0

})