define([
	'underscore',
	'backbone',
	'backbone.marionette',
	'hbs!templates/first-region',
	'hbs!templates/tag-item'
], function(
	_,
	Backbone,
	Marionette,
	FirstRegionTemplate,
	TagTemplate
) {

	var TagView = Backbone.Marionette.ItemView.extend({
		tagName: "div",
		className: "tag-item",
		template: TagTemplate
	});

	var TagsView = Backbone.Marionette.CollectionView.extend({
		tagName: "ul",
		className: "tags",
		childView: TagView
	});

	var FirstRegionView = Backbone.Marionette.CompositeView.extend({
		tagName: "div",
		className: "first-region-container",
		template: FirstRegionTemplate,

		childView: TagsView,
		childViewContainer: ".tags-container-extra",

		initialize: function(options) {
			this.listenTo(this.collection, 'add remove reset', this.collectionChanged);
		},

		collectionChanged: function() {
			console.log('collectionChanged: ', this.collection);
		}
	});

	return FirstRegionView;
});