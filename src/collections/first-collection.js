define([
	'underscore',
	'backbone',
	'models/main-content-model'
], function(
	_,
	Backbone,
	MainModel
) {

	var FirstCollection = Backbone.Collection.extend({
		model: MainModel,
		url: "https://www.gozefo.com/bangalore/category/get/all/nestCategories"
	});

	return FirstCollection;
})