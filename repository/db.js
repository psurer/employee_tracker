var mysql      = require('mysql');
module.exports = class sqlConnector {
    connection=null;
    connect(userid, password){
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : userid,
            password : password,
            database : 'employee_tracker'
          });
    }

    execute(sqlStatement, cb){
        this.connection.connect();
        this.connection.query(sqlStatement, (error, results, fields)=> {
            this.connection.end();
            cb(error, results, fields);
        })
    }
}