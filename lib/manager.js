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

const manager = new Manager("Ace", 3, "managerace@gmail.com", 1); 

manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole(); 