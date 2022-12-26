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
      welcome();
    } else if (choice.todo == 'Add Employee') {
      addEmployee();
      welcome();
    } else if (choice.todo == 'Update Employees Role') {
      updateEmployee();
      welcome();
    } else if (choice.todo == 'View All Roles') {
      getRoles();
      welcome();
    } else if (choice.todo == 'Add Role') {
      addRole();
      welcome();
    } else if (choice.todo == 'View All Departments') {
      getDept();
      welcome();
    } else if (choice.todo == 'Add Department') {
      addDept();
      welcome();
    } else (console.log('Goodbye'));
  });
};

// Starts Welcome Program
welcome();