var exporess = require('express');

var router = exporess.Router();
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
router.post('/api/burgers', function(req, res) {
    burger.create([
        'name', 'devour'
    ], [
        req.body.name, req.body.devour
    ], function(result) {
        //send back the id of the new route
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var status = 'id = ' + rq.params.id;

    console.log('status', status);

    burger.update({
        devour: req.body.devour
    }, condition, function(result) {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export routes for the server.js to use
module.exports = router;
