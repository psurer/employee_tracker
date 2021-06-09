const dbConnector = require('./db');


module.exports = class EmployeeRepo {
    sqlConnector = new dbConnector();

    constructor(){
        this.sqlConnector.connect('root','');
    }

    findById(employeeId, cb){
        this.sqlConnector.execute(`SELECT * FROM \`employee_tracker\`.\`employee\` WHERE id=${employeeId};`, cb);
    }
    findByName(employeeName, cb){
        this.sqlConnector.execute(`SELECT * FROM \`employee_tracker\`.\`employee\` WHERE first_name='${employeeName}';`, cb);
    }
    getAll(cb){
        this.sqlConnector.execute('SELECT * FROM `employee_tracker`.`employee`;', cb);
    }

    add(employee, cb){
        this.sqlConnector.execute(`INSERT INTO \`employee_tracker\`.\`employee\` (\`first_name\`, \`last_name\`, \`role_id\`, \`manager_id\`) VALUES ('${employee.first_name}', '${employee.last_name}', ${employee.role_id}, ${employee.manager_id});`, cb);
    }

    update(role, cb){
        this.sqlConnector.execute(`UPDATE \`employee_tracker\`.\`role\` SET title = '${role.title}', salary = ${role.salary}, department_id = ${role.department_id} WHERE id= ${role.id};`,cb);
    }

    delete(roleid, cb){
        this.sqlConnector.execute(`DELETE FROM \`employee_tracker\`.\`role\` WHERE id =${roleid};`, cb);
    }
}