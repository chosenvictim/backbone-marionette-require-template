define([
	'backbone',
	'backbone.marionette',
	'views/header-view',
	'views/main-content-view',
	'views/footer-view'
], function(
	Backbone,
	Marionette,
	HeaderView,
	MainContentView,
	FooterView
) {
	var MainController = Backbone.Marionette.Controller.extend({
		initialize: function(options) {
			this.headerRegion = options.headerRegion;
			this.mainContentRegion = options.mainContentRegion;
			this.footerRegion = options.footerRegion;
		},

		defaultRoute: function() {
			this.headerRegion.show(new HeaderView());
			this.mainContentRegion.show(new MainContentView());
			this.footerRegion.show(new FooterView());
		}
	});

	return MainController;
});