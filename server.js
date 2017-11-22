var express = require('express');
var app = express();
var path = require('path');

require('./app/routes.js')(app);
app.use(express.static(__dirname + '/public'));

  // Start that server, baby
app.listen(3000, "localhost");
console.log("Server running at http://localhost:3000");