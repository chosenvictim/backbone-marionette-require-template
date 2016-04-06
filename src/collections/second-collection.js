define([
	'underscore',
	'backbone',
	'models/main-content-model'
], function(_, Backbone, MainModel) {

	var SecondCollection = Backbone.Collection.extend({
		model: MainModel
	});

	return SecondCollection;
})