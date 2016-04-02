var app = new (require('express'))();
var express = require('express');
app.use(express.static(__dirname));
var port = 3000;
app.listen(port, function(error) {
	if(error) {
		console.error(error);
	} else {
	    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
});
