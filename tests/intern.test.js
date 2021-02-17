const { test, expect } = require("@jest/globals");

const Intern = require("../lib/intern.js");

test("This is to create employee instance", () => {
    let intern = new Intern()

    expect(typeof(intern)).toBe("object")
});