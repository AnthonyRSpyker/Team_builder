const { test, expect } = require("@jest/globals");

const Intern = require("../lib/intern.js");

test("This is to create employee instance", () => {
    let intern = new Intern()

    expect(typeof(intern)).toBe("object")
});

test("When a school is entered a string school is returned", () => {
    let school = "harvard"

    let s = new Intern(school)
    
    const internSchool = s.getSchool();

    expect(internSchool).toBe(school)
})

test("when role is asked, Intern is returned", () => {
    let role = new Intern();

    const newRole = role.getRole();

    expect(newRole).toBe("Intern");
})