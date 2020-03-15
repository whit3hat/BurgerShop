var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

//server for static content
app.use(express.static('public'));

//parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

//start our server so that it can begin listening to client requests
app.listen(PORT, function() {
    //log (server-side) when our server has started
    console.log('server listening on: http://localhost' + PORT);
});