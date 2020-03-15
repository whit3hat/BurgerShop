var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Madylin3!',
    database: 'burgers_db'
});

//make connection to db
connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//export connection module to use in ORM
module.exports = connection;