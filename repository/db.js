var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'employee_tracker'
});
 
connection.connect();
 
connection.query('SELECT * FROM employee_tracker.role;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});
 
connection.end();