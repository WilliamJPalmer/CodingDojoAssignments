var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
//-------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ json }));
app.use(express.static(path.join(__dirname, '../angularMean/dist')));  // change path to angular
// app.set('views', path.join(__dirname, '../client/views'));  // remove this for connecting to angular.


app.set('view engine', 'ejs');
var port = 8000;
//---------------- database---------------------------------
require('./config/mongoose.js');
//-------------------routes------------------------------
var routes_setter = require('./config/routes.js')
routes_setter(app);
app.get('*', function(req, res){ // added this line..function..callback//
  res.sendfile(path.resolve("./dist/index.html")) // this will render all of the angular html files
})  // added this line
//-------------------------------------------------

app.listen(port, function(){
  console.log("Listening on Port", port);
});
