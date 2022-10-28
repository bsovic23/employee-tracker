// npm const
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Imported functions from other pages
const { getDept, getRoles, getEmployees, addEmployee } = require('./sql-functions');

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
      console.log('update empl not built yet')
    } else if (choice.todo == 'View All Roles') {
      getRoles();
    } else if (choice.todo == 'Add Role') {
      console.log('add role not built yet')
    } else if (choice.todo == 'View All Departments') {
      getDept();
    } else if (choice.todo == 'Add Department') {
      console.log('add dept function not built yet');
    } else (console.log('Goodbye'));
  })
  /*
  INSERT THE FUNCTION FOR welcomeAgain in the 
  SQL-FUNCTIONS file at the bottom.
  */
};

// Starts Welcome Program
welcome();
