define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.marionette',
	'hbs!templates/item-container',
	'hbs!templates/nested-item'
], function(
	$,
	_,
	Backbone,
	Marionette,
	ItemContainerTemplate,
	NestedItemTemplate
) {

	var NestedItemView = Backbone.Marionette.ItemView.extend({
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

		events: {
			'mouseover .item-options': 'showNestedOptions',
			'click .item-checkbox': 'fetchWithFilter'
		},

		initialize: function(options) {
			this.collection = new Backbone.Collection(this.model.get('nestedCategory'));
			this.listenTo(this.collection, 'add remove reset', this.collectionChanged);
		},

		collectionChanged: function() {
			console.log('ItemView collection changed: ', this.render());
		},

		showNestedOptions: function() {
			this.$el.find('.nested-category').slideToggle();
		},

		fetchWithFilter: function() {
			var filter = [];
			var nestedItems = this.$el.find('.nested-item');
			_.each(nestedItems, function(item, idx) {
				$(item).find('.item-checkbox').checked ? filter.push($(item).data().value) : false;
			});
			this.collection.fetchWithFilter({});
		}
	});

	var FirstRegionView = Backbone.Marionette.CollectionView.extend({
		tagName: "ul",
		className: "items-collection",
		childView: ItemView
	});

	return FirstRegionView;
});