const Tracker = require('./tracker');
const cTable = require('console.table');
const EmployeeModel = require('./model/employee');
const { mainMenu } = require('./questions');

function main()
{
    tracker = new Tracker();
    tracker.showMenu((selectedOption)=>{
        switch (selectedOption) {
            case "(1) View All Employees": {
                tracker.allEmployees((data)=> {
                    console.table(data);
                })
                break;
            }
            case "(5) View All Departments": {
                tracker.allDepartments((data)=> {
                    console.table(data);
                })
                break;
            }
            case "(7) View All Roles":{
                tracker.allRoles((data)=> {
                    console.table(data);
                })
                break;
            }
            case "(4) Add Employee":{
                tracker.showEmployeeMenu((data)=> {
                    let employee = new EmployeeModel(0, data.first_name, data.last_name, data.role);
                    //Convert manager name to manager id
                    this.tracker.findEmployeeByName(data.manager, (manager)=> {
                        console.log("Inside finding Employee");
                        console.log(data.manager);
                        console.log(manager.id);
                        employee.manager_id = manager.id;
                        this.tracker.addEmployee(employee,(data)=> {
                            console.table(data);
                        })
                    });
                });
                break;
            }
        }
    });

}

// Entry point

main();