const inquirer = require('inquirer');
const { writeHTML } = require('../utils/generateHTML');
const Employee = require('./Employee');
const Manager = require('./Manager');

function Questions() {
    this.employee;
};

Questions.prototype.startQuestions = function() {
  inquirer
      .prompt([
        {
          type: 'list',
          name: 'type',
          message: 'What type of employee is this?',
          choices: ['Manager', 'Engineer', 'Intern']
        },
        {
          type: 'text',
          name: 'name',
          message: 'What is your name?'
        },
        {
          type: 'text',
          name: 'id',
          message: 'What is your employee id?'
        },
        {
          type: 'text',
          name: 'email',
          message: 'What is your email?'
        }
      ])
      .then(({ name, id, email, role, type })=> {
        if(type==='Manager') {
          inquirer
            .prompt({
              type: 'text',
              name: 'office',
              message: 'Which office location are you in?'
            })
            .then(({ office }) => {
              role = 'Manager';
              this.employee = new Manager(name, id, email, role, office);
              this.test();
            })
        } else if (type==='Engineer') {
          console.log('engineer');
          role = 'Engineer';
        } else if (type==='Intern') {
          console.log('Intern');
          role = 'Engineer';
        }
      })
}
Questions.prototype.test = function() {
  this.employee.getName();
  this.employee.getId();
  this.employee.getEmail();
  this.employee.getRole();
  this.employee.getOffice();
}


module.exports = Questions;