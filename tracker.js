const role = require('./model/role');
const roleModel = require('./model/role');
const roleRepo = require('./repository/roleRepo');

var roleDb = new roleRepo();



//TO GET ALL ROLES
// roleDb.getAll(function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });

//TO find  one ROLE

// roleDb.findOne(9, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });


// TO DELETE ONE ROLE
// roleDb.delete(10, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   })


// TO ADD A ROLE
// var newRole = new roleModel(-1,'admin', 50000, 1);

// roleDb.add(newRole, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });







// LEAVE THIS ONE ALONE

// roleDb.findOne(9, function (error, results, fields) {
//         if (error) throw error;
//         let role = results[0];
//         role.title = 'priscila';
//         roleDb.update(role, (error,results,fields)=> console.log(results));
//       })

