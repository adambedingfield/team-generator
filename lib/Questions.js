const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { createManager, createEngineer, createIntern } = require('../src/template');

function Questions() {
    this.employee;
    this.employed = [];
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
              this.employed.push(new Manager(name, id, email, role, office));
              console.log(this.employed);
              this.addOrFinish();
            })
        } else if (type==='Engineer') {
            inquirer
            .prompt({
              type: 'text',
              name: 'github',
              message: 'What is your GitHub username?'
            })
            .then(({ github }) => {
              role = 'Engineer';
              this.employed.push(new Engineer(name, id, email, role, github));
              console.log(this.employed);
              this.addOrFinish();
            })
        } else if (type==='Intern') {
          inquirer
            .prompt({
              type: 'text',
              name: 'school',
              message: 'Which school do you currently attend?'
            })
            .then(({ school }) => {
              role = 'Intern';
              this.employed.push(new Intern(name, id, email, role, school));
              console.log(this.employed);
              this.addOrFinish();
            })
        }
      })
}
Questions.prototype.addOrFinish = function() {
  inquirer
    .prompt({
        type: 'confirm',
        name: 'add',
        message: 'Would you like to add another employee(Defaults to no)?',
        default: false
    })
    .then(({ add }) => {
      if(add) {
        this.startQuestions();
      } else {
        console.log('All done');
      }
    })
}


module.exports = Questions;