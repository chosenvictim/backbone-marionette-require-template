require.config({
	stubModules: ['hbs', 'hbs/underscore', 'hbs/json2', 'hbs/handlebars'],
	/* Require.js allows us to configure shortcut alias. There usage will become more apparent further along. */
	paths: {
		"jquery": "../libs/jquery.min",
		"underscore": "../libs/underscore.min",
		"backbone": "../libs/backbone.min",
		"backbone.marionette": "../libs/backbone.marionette.min",
		"bootstrap-multiselect": "../libs/bootstrap-multiselect.min",
		"bootstrap": "../libs/bootstrap.min",
		"hbs": "../libs/hbs",
		"handlebars": "../libs/hbs/handlebars.runtime",
		"text": "../libs/text",
		"my": "../libs/my.class.min"
	},

	hbs: {
		// default plugin settings, listing here just as a reference
		templateExtension: "hbs",
		helperDirectory: "templates/helpers",
		handlebarsPath: "handlebars"
	}
});

require([
	// Load our app module and pass it to our definition function
	'app'
], function(App) {
	// The "app" dependency is passed in as "App"
	App.init();
});