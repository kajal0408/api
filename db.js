const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : '12345',
    database : 'kajal'
});

connection.connect((err)=> {
    if (err) 
    {
        console.log('Connection failed \n Error:'+JSON.stringify(err));
    }
    else
    {
        console.log('Database Connected ');
    }
});

module.exports = connection;