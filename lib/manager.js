const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    
    getOfficeNumber() {
        console.log("Office Number: " + "" + this.officeNumber);
    }

    getRole() {
        console.log("Role: " + "" + this.role);
    }
};

module.exports = Manager;