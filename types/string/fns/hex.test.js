"use strict";
const { fromAscii, verifyHex } = require("./hex");
describe("hex", () => {
    it("fromAscii", () => {
        expect(fromAscii("hello")).toBe("68656c6c6f");
    });
    it("verifyHex with valid input", () => {
        expect(verifyHex("68656c6c6c6f")).toBe(true);
    });
    it("verifyHex with invalid input", () => {
        expect(verifyHex("hello")).toBe(false);
    });
});
