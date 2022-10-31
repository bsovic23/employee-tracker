// npm const
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Imported functions from other pages
const { getDept, getRoles, getEmployees, addDept, addRole, addEmployee, updateEmployee } = require('./sql-functions');

// Initial start of the program
const welcome = () => {
    return inquirer.prompt([
    {
      type: 'list',
      name: 'todo',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employees Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
  ])
  .then(choice => {
    console.log(choice);
    if (choice.todo == 'View All Employees') {
      getEmployees();
    } else if (choice.todo == 'Add Employee') {
      addEmployee();
    } else if (choice.todo == 'Update Employees Role') {
      updateEmployee();
    } else if (choice.todo == 'View All Roles') {
      getRoles();
    } else if (choice.todo == 'Add Role') {
      addRole();
    } else if (choice.todo == 'View All Departments') {
      getDept();
    } else if (choice.todo == 'Add Department') {
      addDept();
    } else (console.log('Goodbye'));
  });
  /*
  INSERT THE FUNCTION FOR welcomeAgain in the 
  SQL-FUNCTIONS file at the bottom.

  DO NOT ADD A .then(welcome()); after the else. it 
  will just run the program 92340234 times
  */
};

// Starts Welcome Program
welcome();

const test = () => {
  console.log('this works!');
}


module.exports = { 
  welcome, 
  test
};