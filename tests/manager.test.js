const { test, expect } = require("@jest/globals");
const Manager = require("../lib/manager.js");

test("This is to create employee instance", () => {
    let manager = new Manager()

    expect(typeof(manager)).toBe("object")
});


test("this makes sure the role returned is 'engineer'", () => {
    let role = new Manager()

    const newRole = role.getRole();
    
    expect(newRole).toBe("Manager")
})

test("When a school is entered a string school is returned", () => {
    let number = 6;

    let s = new Manager("anthony", 5, "that mail", number)
    
    const managerNumber = s.getOfficeNumber();

    expect(managerNumber).toBe(number)
})