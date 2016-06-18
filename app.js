'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || "https://pnwweather.herokuapp.com/";

// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Server listening on port ' + (port || "https://pnwweather.herokuapp.com/"));
});
