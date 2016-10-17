var express = require('express');
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cats = require('./cats.js')(app);



var server = app.listen(8080, function() {
    console.log('Serving running yoo fubar');
});