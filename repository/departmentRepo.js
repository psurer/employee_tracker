const dbConnector = require('./db');


module.exports = class DepartmentRepo {
    sqlConnector = new dbConnector();

    constructor(){
        this.sqlConnector.connect('root','');
    }

    findOne(deparmentId, cb){
        this.sqlConnector.execute(`SELECT * FROM \`employee_tracker\`.\`department\` WHERE id=${deparmentId};`, cb);
    }
    getAll(cb){
        this.sqlConnector.execute('SELECT * FROM `employee_tracker`.`department`;', cb);
    }

    add(role, cb){
        this.sqlConnector.execute(`INSERT INTO \`employee_tracker\`.\`role\` (\`title\`, \`salary\`, \`department_id\`) VALUES ('${role.title}', ${role.salary}, ${role.department_id});`, cb);
    }

    update(role, cb){
        this.sqlConnector.execute(`UPDATE \`employee_tracker\`.\`role\` SET title = '${role.title}', salary = ${role.salary}, department_id = ${role.department_id} WHERE id= ${role.id};`,cb);
    }

    delete(roleid, cb){
        this.sqlConnector.execute(`DELETE FROM \`employee_tracker\`.\`role\` WHERE id =${roleid};`, cb);
    }
}