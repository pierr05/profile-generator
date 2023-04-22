const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        console.log("School: " + "" + this.school);
    }

    getRole() {
        console.log("Role: " + "" + this.role);
    }
};

module.exports = Intern;