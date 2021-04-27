const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,role,github) {
        super(name,id,email,role)
        this.github = github;
    }
    getGitHub() {
        console.log(this.github);
        return `${this.github}`;
    }
}

module.exports = Engineer;