define([
	'backbone.marionette'
], function(
	Marionette
) {
	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			'*actions': 'defaultRoute'
		}
	});

	return Router;
});
