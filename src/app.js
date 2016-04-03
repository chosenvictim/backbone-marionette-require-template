define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.marionette',
	'my',
	'router',
	'controllers/main-controller'
], function(
	$,
	_,
	Backbone,
	Marionette,
	my,
	Router,
	MainController
) {
	var App = my.Class({
		init: function() {
			var self = this;
			this.mainApp = new Backbone.Marionette.Application();
			this.mainApp.addRegions({
				headerRegion: '#header',
				mainContentRegion: '#main-content',
				footerRegion: '#footer'
			});
			this.mainApp.addInitializer(function() {
				self.mainController = new MainController({
					headerRegion: self.mainApp.headerRegion,
					mainContentRegion: self.mainApp.mainContentRegion,
					footerRegion: self.mainApp.footerRegion
				});
				self.appRouter = new Router({controller: self.mainController});
				Backbone.history.start();
			});
			this.mainApp.start();
		}

	});

	return new App();

});
