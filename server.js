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
};

// Constructor Function
welcome()
    .then(addEmployee)
    .then(getDept)
    .then(getRoles)
    .then(getEmployees)
    ;