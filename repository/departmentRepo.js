module.exports = function (){
    return {
        getAll(){
            //Call db with the command 
            //SELECT * FROM employee_tracker.department;
        },
        add(department) {
            //Call the db to add one department

        },
        delete(departmentId){
            //Call the db to delete one department using its id.

        },
        update(department){
            //CAll the db to update a department row.
        }
    }
}