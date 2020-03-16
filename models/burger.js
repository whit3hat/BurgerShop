var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    //var cols and val are arrays
    create: function(name, cb) {
        orm.create('burgers', [
            'burger_name', 'devoured'
        ], [
            name, false
        ], cb);
    },

    update: function(id, cb) {
        var condition = 'id=' + id;
        orm.update('burgers', {
            devoured: true
        }, condition, cb);
    },
};

//export the db function for the controller
module.exports = burger;