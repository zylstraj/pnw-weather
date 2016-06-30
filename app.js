'use strict';

var express = require('express');
var app = express();
// var cors = require('cors')
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
var invocation = new XMLHttpRequest();
var url = "https://api.forecast.io/forecast/f78dd824963251a1a2bc8cd3b18b634b/47.606,-122.335";
function callOtherDomain() {
    if(invocation) {
      invocation.open('GET', url, true);
      invocation.onreadystatechange = handler;
      invocation.send();
    }
}
// app.use(cors());
// app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   next();
// });
app.use(express.static(__dirname + '/public'));
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
app.listen(port, function() {
  console.log('Server listening on port ' + (port || 3000));
});
// 'https://api.forecast.io/forecast/f78dd824963251a1a2bc8cd3b18b634b/47.606,-122.335'
