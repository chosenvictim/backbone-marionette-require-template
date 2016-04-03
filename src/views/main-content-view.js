define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.marionette',
	'text!templates/main-content.html',
	'bootstrap-multiselect'
], function(
	$,
	_,
	Backbone,
	Marionette,
	mainContentTemplate
) {
	var MainContentView = Backbone.Marionette.ItemView.extend({
		template: mainContentTemplate,
		className: 'main-content-view',

		initialize: function(options) {

		},

		onShow: function() {
			this.$el.find('#multiselect-options').multiselect();
		}

	});

	return MainContentView;
});
