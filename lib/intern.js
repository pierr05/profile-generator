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

const intern = new Intern("Zaire", 9, "zaire@gmail.com", "University of Central Florida");

intern.getName();
intern.getId();
intern.getEmail();
intern.getRole(); 
intern.getSchool();