var express = require('express');
var session = require('express-session');
var router = express.Router();

router.use(session({secret:'ALARLOPO', resave:true, saveUninitialized:true}));

router.post('/', function(req, res){
    //req.body.username
    //var ssn = req.session; 
    //ssn.user = user;
    res.send(JSON.stringify(req.body.username));
});

/*router.get('/:etapeId', function(req, res){
    req.params.etapeId;
});*/

router.get('/', function(req, res){
	res.send('{"tab":[1,2,3],"test":"ok"}');
});

module.exports = router;