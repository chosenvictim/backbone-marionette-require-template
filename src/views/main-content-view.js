define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.marionette',
	'models/main-content-model',
	'collections/first-collection',
	'collections/second-collection',
	'views/first-region-view',
	'hbs!templates/main-content'
], function(
	$,
	_,
	Backbone,
	Marionette,
	MainContentModel,
	FirstCollection,
	SecondCollection,
	FirstRegionView,
	mainContentTemplate
) {
	var MainContentView = Backbone.Marionette.LayoutView.extend({
		tagName: "div",
		className: 'main-content-region',
		template: mainContentTemplate,
		regions: {
			firstRegion: "#first-region",
			secondRegion: "#second-region"
		},

		events: {

		},

		initialize: function(options) {
			this.model = new MainContentModel();
			this.firstRegionCollection = new FirstCollection();
			this.secondRegionCollection = new SecondCollection();
			this.firstRegionCollection.fetch();
		},

		onRender: function() {
			this.createFirstRegion();
			this.createSecondRegion();
		},

		createFirstRegion: function() {
			var firstRegionView = new FirstRegionView({
				collection: this.firstRegionCollection
			});
			this.firstRegion.show(firstRegionView);
		},

		createSecondRegion: function() {
		}

	});

	return MainContentView;
});
