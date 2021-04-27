const { writeFile } = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const { writeHTML } = require("../utils/generateHTML");

const createManager = (Manager) => {
    return writeHTML(`${Manager.name},
${Manager.id},
${Manager.email},
${Manager.office}
    `);
};

const createEngineer = (Engineer) => {
    return writeHTML(`${Engineer.name},
${Engineer.id},
${Engineer.email},
${Engineer.github}
    `);
};

const createIntern = (Intern) => {
    return writeHTML(`${Intern.name},
${Intern.id},
${Intern.email},
${Intern.school}
    `);
};

module.exports = { createEngineer, createIntern, createManager };