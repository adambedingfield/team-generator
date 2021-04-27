const inquirer = require('inquirer');
const { writeHTML } = require('../utils/generateHTML');
const Employee = require('./Employee');

function Questions() {
    this.employee;
};

Questions.prototype.startQuestions = function() {
  inquirer
      .prompt([
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
      .then (({ name, id, email, role}) => {
          role = 'Employee';
          this.employee = new Employee(name, id, email, role);
          this.test();
      })
}
Questions.prototype.test = function() {
  this.employee.getName();
  this.employee.getId();
  this.employee.getEmail();
  this.employee.getRole();
}


module.exports = Questions;