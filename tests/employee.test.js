const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("This is to create employee instance", () => {
    let employee = new Employee()

    expect(typeof(employee)).toBe("object")
});

test("This is to check that the name, id and email returns", () => {
    let myName = new Employee("me", 25, "me@ymail.com")

    expect(typeof(myName.name).toBe("me"));
    expect(typeof(myName.id).toBe(25));
    expect(typeof(myName.id).toBe("me@ymail.com"));
});