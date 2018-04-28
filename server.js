var express = require('express');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

var port = process.env.PORT || 3000;
var app = express();

// Serve static content from 'public' directory
app.use(express.static(process.cwd() + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));

// handlebars pages as the view engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);

// app.listen(app.get('port'), function () {
// 	console.log('App listening on PORT ', app.get('port'));
// });