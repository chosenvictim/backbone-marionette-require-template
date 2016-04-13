define([
	'jquery',
	'underscore',
	'backbone',
	'models/main-content-model'
], function(
	$,
	_,
	Backbone,
	MainModel
) {

	var FirstCollection = Backbone.Collection.extend({
		model: MainModel,
		url: "https://www.gozefo.com/bangalore/category/get/all/nestCategories",

		fetchWithFilter: function(options) {
			var url = 'https://www.gozefo.com/category/selectedItem/applyFilters/remainCategory';
			$.post(url, function(data) {
				this.save(data);
			});
		}
	});

	return FirstCollection;
})