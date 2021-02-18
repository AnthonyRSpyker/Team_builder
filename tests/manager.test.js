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