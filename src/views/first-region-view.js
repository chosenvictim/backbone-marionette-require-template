define([
	'underscore',
	'backbone',
	'backbone.marionette',
	'text!templates/first-region.html',
	'text!templates/tag-item.html'
], function(
	_,
	Backbone,
	Marionette,
	FirstRegionTemplate,
	TagTemplate
) {

	var TagsView = Backbone.Marionette.ItemView.extend({
		tagName: "div",
		className: "tag-item",
		template: TagTemplate
	});

	var FirstRegionView = Backbone.Marionette.CompositeView.extend({
		tagName: "div",
		className: "first-region-container",
		template: FirstRegionTemplate,

		childView: TagsView,
		childViewContainer: ".tags-container",

		initialize: function(options) {
			this.listenTo(this.collection, 'add remove reset', this.collectionChanged);
		},

		collectionChanged: function() {
			console.log('collectionChanged: ', this.collection);
		}
	});

	return FirstRegionView;
});