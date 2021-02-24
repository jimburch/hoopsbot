const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hoopsbot'
});

connection.connect((err) => {
  err ? console.error(err) : console.log('Connected to MySQL!')
});

module.exports = {

}