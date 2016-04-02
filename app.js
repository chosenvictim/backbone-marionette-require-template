require(['libs/text!header.html', 'libs/text!home.html', 'libs/text!footer.html'], function (headerTpl, homeTpl, footerTpl) {
	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "home",
			"*actions": "home"
		},
		initialize: function() {
			this.headerView = new HeaderView();
			this.headerView.render();
			this.footerView = new FooterView();
			this.footerView.render();
		},
		home: function() {
			this.homeView = new HomeView();
			this.homeView.render();
		}
	});

	HeaderView = Backbone.View.extend({
		el: "#header",
		templateFileName: "header.html",
		template: headerTpl,

		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});

	FooterView = Backbone.View.extend({
		el: "#footer",
		template: footerTpl,
		render: function() {
			this.$el.html(_.template(this.template));
		}
	});

	ZefoModel = Backbone.Model.extend({
		defaults: {
			"id": 1,
			"name": "",
			"nestedCategory": {},
			"parentId": "0"
		}

	});

	ZefoCollection = Backbone.Collection.extend({
		model: ZefoModel,
		url: 'https://www.gozefo.com/bangalore/category/get/all/nestCategories',

		parse: function(response) {
			console.log(response);
			return response;
		}
	});

	ModelView = Backbone.View.extend({
		tagName: "div",
		className: "view-item",
		initialize: function() {

		},
		render: function() {
			var template = _.template("<div> product: <%= data %></div>");
			$(this.el).html(template({data: this.model.toJSON()}));
			return this;
		},
	});

	apiFilter = {
		Condition: [],
		Type: [],
		Price: []
	}
	HomeView = Backbone.View.extend({
		tagName: "div",
		el: "#content",
		template: homeTpl,
		events: {
			"select": "valueSelected"
		},
		initialize: function() {
			var self = this;
			this.collection = new ZefoCollection();
			this.collection.on('add', function(data) {
				self.appendNewItem(data);
			});
			this.collection.fetch();
		},
		render: function() {
			$(this.el).html(_.template(this.template));
			$('#example-getting-started').multiselect();
			return this;
		},
		appendNewItem: function(data) {
			var modelView = new ModelView({model: data});
			modelView.render();
			$(this.el).find('#example-getting-started').append($(modelView.$el));
			this.render();
		},
		"valueSelected": function(event) {
			$event.currentTarget
		}
	});

	app = new ApplicationRouter();
	Backbone.history.start();	
});


