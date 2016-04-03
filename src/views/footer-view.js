define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.marionette',
	'text!templates/footer.html'
], function(
	$,
	_,
	Backbone,
	Marionette,
	footerTemplate
) {
	var HeaderView = Backbone.Marionette.ItemView.extend({
		template: footerTemplate,
		className: 'footer-view',

		initialize: function(options) {
			
		}
	});

	return HeaderView;
});
