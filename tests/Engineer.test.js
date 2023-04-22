const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
    const engineer = new Engineer("Karim", 1, "karim@gmail.com", "karim05");

    it("should return engineer's name", () => {
        expect(engineer.getName()).toBe(this.name)
    });

    it("should return engineer's ID", () => {
        expect(engineer.getId()).toBe(this.id)
    });

    it("should return engineer's email", () => {
        expect(engineer.getEmail()).toBe(this.email)
    });

    it("should return engineer's github", () => {
        expect(engineer.getGithub()).toBe(this.github)
    });

    it("should return engineer's role", () => {
        expect(engineer.getRole()).toBe(this.role)
    }); 
})