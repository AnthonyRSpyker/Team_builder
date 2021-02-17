const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("This is to create employee instance", () => {
    let employee = new Employee()

    expect(typeof(employee)).toBe("object")
});

test("This is to check that the name, id and email returns the correct type.", () => {
    let myName = new Employee("me", 25, "me@ymail.com");

    expect(typeof(myName.name)).toBe("string");
    expect(typeof(myName.id)).toBe("number");
    expect(typeof(myName.email)).toBe("string");
});

test("This is to make sure the role is returned as Employee", () => {
    let role = new Employee()

    const newRole = role.getRole();
    
    expect(newRole).toBe("Employee")
});

test("The name should return 'Jerry'", () => {
    let name = "jerry";

    let employee = new Employee(name);

    expect(employee.getName()).toBe(name);


})

