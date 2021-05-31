module.exports = function (){
    return {
        getAll(){
            //Call db with the command 
            //SELECT * FROM employee_tracker.employee;
        },
        add(employee) {
            //Call the db to add one employee

        },
        delete(employeeId){
            //Call the db to delete one employee using its id.

        },
        update(employee){
            //CAll the db to update a employee row.
        }
    }
}