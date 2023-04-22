const Manager = require('../lib/manager');

describe('Manager class', () => {
    const manager = new Manager("Ace", 3, "managerace@gmail.com", 1); 

    it("should return manager's name", () => {
        expect(manager.getName()).toBe(this.name)
    });

    it("should return manager's ID", () => {
        expect(manager.getId()).toBe(this.id)
    });

    it("should return manager's email", () => {
        expect(manager.getEmail()).toBe(this.email)
    });

    it("should return manager's office number", () => {
        expect(manager.getOfficeNumber()).toBe(this.officeNumber)
    });

    it("should return manager's role", () => {
        expect(manager.getRole()).toBe(this.role)
    }); 
})