const Intern = require('../lib/intern');

describe('Intern class', () => {
    const intern = new Intern("Zaire", 9, "zaire@gmail.com", "University of Central Florida");

    it("should return intern's name", () => {
        expect(intern.getName()).toBe(this.name)
    });
  
    it("should return intern's ID", () => {
        expect(intern.getId()).toBe(this.id)
    });

    it("should return intern's email", () => {
        expect(intern.getEmail()).toBe(this.email)
    });

    it("should return intern's school", () => {
        expect(intern.getSchool()).toBe(this.school)
    });

    it("should return intern's role", () => {
        expect(intern.getRole()).toBe(this.role)
    }); 
})