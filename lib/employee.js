class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"; 
    }
    
    getName() {
        console.log("Name: " + "" + this.name); 
    }
    getId() {
        console.log("ID: " + "" + this.id)
    }
    getEmail() {
        console.log("Email: " + "" + this.email)
    }
    getRole() {
        console.log(this.role);
    }
};

module.exports = Employee;