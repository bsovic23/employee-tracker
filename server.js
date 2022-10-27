const inquirer = require('inquirer');

const welcome = () => {
    inquirer.prompt([
    {
      type: 'list',
      name: 'todo',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employees Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
  ])
};

const addEmployee = () => {
    inquirer.prompt([
        {
          type: 'list',
          name: 'addEmployee',
          message: 'What would you like to do?',
          choices: ['View All Employees', 'Add Employee', 'Update Employees Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
      ])
}

welcome();