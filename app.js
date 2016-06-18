'use strict';

var express = require('express');
var app = express();
var cors = require('cors')
var port = process.env.PORT || 3000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Server listening on port ' + (port || 3000));
});
