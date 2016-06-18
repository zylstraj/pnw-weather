'use strict';

var express = require('express');
var app = express();
var cors = require('cors')
var port = process.env.PORT || 3000;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://api.openweathermap.org/data/2.5/weather?id=6173331&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Server listening on port ' + (port || 3000));
});
