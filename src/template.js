const { writeFile } = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const { writeHTML } = require("../utils/generateHTML");

const createManager = employed => {
    return writeHTML(`
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Sheet</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
        ${employed
          .filter(({ office }) => office)
          .map(({ name, id, email, role, office }) => {
          return `
            <section class="my-3" id="about">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <p>${name}</p>
            <p>${id}</p>
            <p>${email}</p>
            <p>${role}</p>
            <p>${office}</p>
            </section>
          `;
          })
          .join('')}
        ${employed
          .filter(({ github }) => github)
          .map(({ name, id, email, role, github }) => {
          return `
            <section class="my-3" id="about">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <p>${name}</p>
            <p>${id}</p>
            <p>${email}</p>
            <p>${role}</p>
            <p>${github}</p>
            </section>
          `;
          })
          .join('')}
        ${employed
          .filter(({ school }) => school)
          .map(({ name, id, email, role, school }) => {
          return `
            <section class="my-3" id="about">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <p>${name}</p>
            <p>${id}</p>
            <p>${email}</p>
            <p>${role}</p>
            <p>${school}</p>
            </section>
            `;
            })
            .join('')}
    </body>
      `);
    };

const createEngineer = () => {
    createManager();
};

const createIntern = (Intern) => {
    return writeHTML(`${Intern.name},
${Intern.id},
${Intern.email},
${Intern.school}
    `);
};


module.exports = { createEngineer, createIntern, createManager };