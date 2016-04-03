define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.marionette',
	'text!templates/header.html'
], function(
	$,
	_,
	Backbone,
	Marionette,
	headerTemplate
) {
	var HeaderView = Backbone.Marionette.ItemView.extend({
		template: headerTemplate,
		className: 'header-view',

		initialize: function(options) {
			
		}
	});

	return HeaderView;
});
