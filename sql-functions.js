// npm const
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: 'Brscuse10111994!!',
    database: 'employeeTracker'
  });

// Insert all sql functions here and then export to server

// View all departments - GET
const getDept = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
      console.table(rows);
    });
  };

// View all roles - GET
const getRoles = () => {
  db.query(`SELECT * FROM roles`, (err, rows) => {
    console.table(rows);
  });
};

// View all employees - GET
const getEmployees = () => {
  db.query(`SELECT * FROM employee`, (err, rows) => {
    console.table(rows);
  });
};

// Add a department - POST

// Add a role - POST

// Add an employee - POST
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
      .then(newEmployeeInfo => {
        console.log(newEmployeeInfo);
      })
};

// Update an employee role - PUT

module.exports = {
    getDept,
    getRoles,
    getEmployees,
    //addDept,
    //addRole,
    addEmployee
    //updateEmployee
};