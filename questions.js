const inquirer = require('inquirer');

const employeeQuestions = [
    {
      type: "input",
      name: "first_name",
      message: "Enter your first name.",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your first name.";
        }
    },
    {
      type: "input",
      name: "last_name",
      message: "Eter your last name.",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your last name.";
        }
    },
  ];
  
  // team manager’s name, employee ID, email address, and office number
  // array of questions that require user input
  const departmentQuestions = [
    {
      type: "input",
      name: "department", // name of property in the obect questions
      message: "", // question user will see
    },
  ];
  
  const roleQuestions =   [{
      type: "list",
      name: "role",
      message: "Who would you like to add to your team?",
      choices: ["Manager", "IT", "Accountant", "I do not wish to add any more to my team"],
    }];
  
 const mainMenu = [{
     type: "list",
     name: "main",
     message: "Select action",
     choices: ["(1) View All Employees", 
     "(2) View All Employees by department" , 
     "(3) View All Employees by department",
     "(4) Add Employee",
     new inquirer.Separator(),
     "(5) View All Departments",
     "(6) Add Department",
     "(7) View All Roles",
     "(8) Add Role"]
 }]
 module.exports = {
     roleQuestions: roleQuestions,
     departmentQuestions: departmentQuestions,
     employeeQuestions: employeeQuestions,
     mainMenu: mainMenu
 }