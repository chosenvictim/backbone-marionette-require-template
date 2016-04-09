define([
	'underscore',
	'backbone',
	'backbone.marionette',
	'hbs!templates/item-container',
	'hbs!templates/nested-item',
	'bootstrap-multiselect'
], function(
	_,
	Backbone,
	Marionette,
	ItemContainerTemplate,
	NestedItemTemplate
) {

	var NestedItemView = Backbone.Marionette.ItemView.extend({
		tagName: "div",
		className: "nested-item",
		template: NestedItemTemplate,

		initialize: function(options) {
			console.log("Nested Item view: ", this.model);
		}
	});

	var ItemView = Backbone.Marionette.CompositeView.extend({
		tagName: "div",
		className: "item-container-extra",
		template: ItemContainerTemplate,

		childView: NestedItemView,
		childViewContainer: ".nested-category",

		initialize: function(options) {
			this.collection = new Backbone.Collection(this.model.get('nestedCategory'));
			this.listenTo(this.collection, 'add remove reset', this.collectionChanged);
		},

		collectionChanged: function() {
			console.log('ItemView collection changed: ', this.render());
		},

		onRender: function() {
			this.$el.find('#item-options').multiselect();
		}
	});

	var FirstRegionView = Backbone.Marionette.CollectionView.extend({
		tagName: "ul",
		className: "items-collection",
		childView: ItemView
	});

	return FirstRegionView;
});