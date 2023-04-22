const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }

    getGithub() {
        console.log("Github: " + this.github)
    }

    getRole() {
        console.log("Role: " + this.role)
    }
} 

module.exports = Engineer;