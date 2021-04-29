const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,role,school) {
        super(name,id,email,role)
        this.school = school;
        this.testing = [];
    }
    getSchool() {
        console.log(this.school);
        return `${this.school}`;
    }
}

module.exports = Intern;