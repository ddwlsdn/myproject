var PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();
var router = require('./router/main')(app);
var path = require('path');

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
var server = app.listen(PORT, function(){
	console.log("Connected!")
});

