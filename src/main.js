require.config({
	/* Require.js allows us to configure shortcut alias. There usage will become more apparent further along. */
	paths: {
		"jquery": "../libs/jquery.min",
		"underscore": "../libs/underscore.min",
		"backbone": "../libs/backbone.min",
		"backbone.marionette": "../libs/backbone.marionette.min",
		"bootstrap-multiselect": "../libs/bootstrap-multiselect.min",
		"bootstrap": "../libs/bootstrap.min",
		"handlebars": "../libs/handlebars.min",
		"text": "../libs/text",
		"my": "../libs/my.class.min"
	}
});

require([
	// Load our app module and pass it to our definition function
	'app'
], function(App) {
	// The "app" dependency is passed in as "App"
	App.init();
});