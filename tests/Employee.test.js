const Employee = require("../lib/employee");

describe("Employee class", () => {
        const employee = new Employee();

        it("should return the name of the role `Employee`", () => {
            expect(employee.getRole()).toBe(this.role); 
        })
});