module.exports = function ( id, first_name, last_name, role_id, manager_id ){
    return {
        id: id,
        first_name: first_name,
        last_name: last_name,
        role_id: role_id,
        manager_id: manager_id
    }
}