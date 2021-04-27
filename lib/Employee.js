const Questions = require('./Questions');

class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        console.log(this.name);
        return `${this.name}`;
    }
    getId() {
        console.log(this.id);
        return `${this.id}`;
    }
    getEmail() {
        console.log(this.email);
        return `${this.email}`;
    }
    getRole() {
        console.log(this.role);
        return `${this.role}`;
    }
}



module.exports = Employee;