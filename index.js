var express = require('express');
var session = require('express-session');
var example = require('./routes/example.js');

var app = express();

// utilisation des sessions
app.use(session({secret:'ALARLOPO', resave:true, saveUninitialized:true}));

// définition d'un directory public
app.use('/public', express.static(__dirname + '/public'));

// permet de parser le body des requetes
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// set les headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(req.body);
    next();
});

var ssn;

app.get('/', function(req, res){
    res.send('Our backend.');
 });

app.use('/example', example);


app.listen(3000, function () {
  console.log('Backend running on port 3000!');
});