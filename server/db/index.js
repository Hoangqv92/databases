var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'https://127.0.0.1:3000',
  user: 'root',
  password: '',
  database: 'chat'
});

module.exports = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


