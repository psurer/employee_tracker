module.exports = function (){
    return {
        getAll(){
            //Call db with the command 
            //SELECT * FROM employee_tracker.role;
        },
        add(role) {
            //Call the db to add one role

        },
        delete(roleId){
            //Call the db to delete one departmet using its id.

        },
        update(role){
            //CAll the db to update a role row.
        }
    }
}