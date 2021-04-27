
class Employee {
    constructor(name='', id='', email=''){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        name = this.name
    }
    getID() {
        id = this.id
    }
    getEmail() {
        email = this.email
    }
    getRole() {
        role = "Employee";
    }
}



module.exports = Employee;