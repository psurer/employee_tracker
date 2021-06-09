const role = require('./model/role');
const roleModel = require('./model/role');
const RoleDb = require('./repository/roleRepo');
const EmployeeDb = require('./repository/employeeRepo');
const DepartmentDb = require('./repository/departmentRepo');
const questions = require('./questions');
const inquirer = require('inquirer');


module.exports = class Tracker {
    roleRepository = new RoleDb();
    employeeRepository = new EmployeeDb();
    departmentRepository = new DepartmentDb();
    showMenu(cb) {
        inquirer.prompt(questions.mainMenu)
            .then((answers) => {
                cb(answers.main);
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }

    showEmployeeMenu(cb) {
        //Grab a list of employees to display as possible managers
        this.allEmployees((data) => {
            
            questions.employeeQuestions.push({
                type: "list",
                name: "manager",
                choices: data.map(item => item.first_name),
                message: "Select Manager",
            });
            questions.employeeQuestions.push({
                type: "input",
                name: "role",
                message: "Enter your role"
            });
            inquirer.prompt(questions.employeeQuestions)
                .then((answers) => {
                    console.log("About to callback");
                    cb(answers);
                })
                .catch((error) => {
                    if (error.isTtyError) {
                        // Prompt couldn't be rendered in the current environment
                    } else {
                        // Something else went wrong
                    }
                });
        });
    }

    allEmployees(cb) {
        this.employeeRepository.getAll((error, results, fields) => {
            cb(results);
        });
    }

    allDepartments(cb) {
        this.departmentRepository.getAll((error, results, fields) => {
            cb(results);
        });
    }

    allRoles(cb) {
        this.roleRepository.getAll((error, results, fields) => {
            cb(results);
        });
    }

    addEmployee(employee, cb) {
        this.employeeRepository.add(employee, (error, results, fields) => {
            console.log(`Error while adding employee ${error}`);
            cb(results);
        });
    }

    findEmployeeByName(name, cb){
        this.employeeRepository.findByName(name, (error, results, fields) => {
            console.log(`Error while finding employee ${error}`);
            cb(results);
        });
    }
}


