const { writeFile } = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const { writeHTML } = require("../utils/generateHTML");

const createManager = Manager => {
    return `${Manager.getName()},
    ${Manager.getId()},
    ${Manager.getEmail()},
    ${Manager.getOffice()}`;
};

const createEngineer = (Engineer) => {
    return `${Engineer.getName()},
    ${Engineer.getId()},
    ${Engineer.getEmail()},
    ${Engineer.getGitHub()}`;
};

const createIntern = (Intern) => {
    return `${Intern.getName()},
    ${Intern.getId()},
    ${Intern.getEmail()},
    ${Intern.getSchool()}`;
};

module.exports = { createEngineer, createIntern, createManager };