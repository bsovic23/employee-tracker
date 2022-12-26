// npm const
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

//Imported functions from other page
const { welcome } = require('./server');

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
const addDept = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'addDept',
        message: 'What is the new department'
      }
    ])
    .then(newDeptInfo => {
      console.log(newDeptInfo);
      // BRIT NEED TO CHANGE THIS TO INCLUDE PARAM AND SQL
      const sql = 
      `INSERT INTO department
      (name)
      VALUES (?)`;
      
      const params = [
        newDeptInfo.addDept,
      ];
      
      console.log(params);

      db.query(sql, params, (err, rows) => {
        console.table(getDept());
      })
    });
};



// Add a role - POST
const addRole = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'addRole',
        message: 'What is the new role title?'
      },
      {
       type: 'input',
       name: 'addRoleSalary',
       message: 'What is the new role salary?'
      },
      {
        type: 'input',
        name: 'addRoleDept',
        message: 'What is the new role department?'
       }
    ])
    .then(newRoleInfo => {
      console.log(newRoleInfo);
      const sql = 
      `INSERT INTO roles
      (title, salary, department_id)
      VALUES (?,?,?)`;
      
      const params = [
        newRoleInfo.addRole,
        newRoleInfo.addRoleSalary,
        newRoleInfo.addRoleDept,
      ];
      
      console.log(params);

      db.query(sql, params, (err, rows) => {
        console.table(getRoles());
      })
    });
};

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
        },
        {
          type: 'input',
          name: 'addEmployeeRole',
          message: 'What is the employees role id?'
         },
         {
          type: 'input',
          name: 'addEmployeeManager',
          message: 'What is the employees manager id?'
         }
      ])
      .then(newEmployeeInfo => {
        console.log(newEmployeeInfo);
        // BRIT NEED TO CHANGE THIS TO INCLUDE PARAM AND SQL
        const sql = 
        `INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;
        
        const params = [
            newEmployeeInfo.addEmployeeFName,
            newEmployeeInfo.addEmployeeLName,
            newEmployeeInfo.addEmployeeRole,
            newEmployeeInfo.addEmployeeManager 
        ];
        
        console.log(params);

        db.query(sql, params, (err, rows) => {
          console.table(getEmployees());
        })
      });
};

// Update an employee role - PUT
const updateEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'again',
      message: 'Would you like to do something else?',
      choices: ['Yes', 'No']
    }
  ])
  .then(choice => {
    console.log(choice);
    if (choice.again == 'Yes') {
      test();
    } else (console.log('goodbye!'));
  });
};

// Re answer the prompt 
/*
const welcomeAgain = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'again',
      message: 'Would you like to do something else?',
      choices: ['Yes', 'No']
    }
  ])
  .then(choice => {
    console.log(choice);
    if (choice.again == 'Yes') {
      test();
    } else (console.log('goodbye!'));
  });
};
*/

// Exported Functions

module.exports = {
    getDept,
    getRoles,
    getEmployees,
    addDept,
    addRole,
    addEmployee,
    updateEmployee  // Not the real fx tho, just test
    //welcomeAgain
};