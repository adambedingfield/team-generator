const inquirer = require('inquirer');
const Employee = require('./Employee');

function Questions() {
    this.name;
    this.email;
    this.id;
}

Questions.prototype.startQuestions = function() {
    inquirer
      .prompt ([
          {
              type: 'text',
              name: 'name',
              message: "What is your Employees name?"
          },
          {
            type: 'text',
            name: 'id',
            message: "What is employees id?"
          },
          {
            type: 'text',
            name: 'email',
            message: "What is employees email?"
          }
        ])
        .then (({ name, id, email }) => {
          this.name = new Employee(name, id, email);
      })
};


module.exports = Questions;