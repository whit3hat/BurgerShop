var express = require('express');

var router = express.Router();
//import the model burger.js to use the database functions
var burger = require('../models/burger.js');

//ROUTERS=========================================
//baisc router
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//route to burgers
router.get('/burgers', function(req, res) {
    //callback response by calling all burgers
    burger.all(function(burgerData) {
        res.render('index', { burger_data: burgerData });
    });
});

//api routers

//post route redirect to index
router.post('/burgers/create', function(req, res) {
    burger.create(req.body.name, function(result) {
        //send back the id of the new route
       console.log(result);
       res.redirect('/');
    });
});

//put route 
router.put('/api/burgers/:id', function(req, res) {
    burger.update(req.params.id, function(result) {

        console.log(result);

            res.status(200).end();
    });
});

//export routes for the server.js to use
module.exports = router;
