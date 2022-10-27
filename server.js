// npm
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Exported functions from other pages
const { getDept } = require('./functions');

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

const addEmployee = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'addEmployeeFName',
          message: 'What is the employees fist name?'
        },
        {
         type: 'input',
         name: 'addEmployeeLName',
         message: 'What is the employees last name?'
        }
      ])
}

welcome()
    .then(addEmployee)
    .then(getDept);