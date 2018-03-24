var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var methodOverride = require('method-override');
var compression = require('compression');

var routes = require('./server/routes');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
//
app.use(cors());
// compress all responses
app.use(compression());
// enable all CORS requests
// app.use(cors());
// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
app.use(methodOverride());
// HTTP request logger middleware for node.js
app.use(morgan('dev'));

app.use(express.static(process.cwd + '/public'));

// App routes
app.use(routes(express.Router()));

app.get('/', function(req, res){
    res.sendFile('index.html', {
        root: './public'
    });
});

var models = require('./server/models');
models.sequelize
    .authenticate()
    .then(function() {
        console.log('Connection successful');
    })
    .catch(function(error) {
        console.log('Error creating connection');
    });

// Listen server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listen server');
});