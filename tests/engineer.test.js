const { test, expect } = require("@jest/globals");

const Engineer = require("../lib/engineer.js");

test("This is to create employee instance", () => {
    let engineer = new Engineer()

    expect(typeof(engineer)).toBe("object")
});

test("This makes sure that the return for the github is a name", () =>{
    let name = "john"

    let hub = new Engineer(name)

    expect(engineer.getGitHub().toBe(name))
});

test("this makes sure the role returned is 'engineer'", () => {
    let role = new Engineer()

    const newRole = role.getRole();
    
    expect(newRole).toBe("Engineer")
})