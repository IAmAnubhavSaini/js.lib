const { deleteChar } = require("./index");

describe("string functions", () => {
    it("deleteChar deletes a character from a string", () => {
        expect(deleteChar({ str: "abc", char: "c" })).toEqual("ab");
    });
    it("deleteChar deletes a character from a string", () => {
        expect(deleteChar({ str: "abc", char: "b" })).toEqual("ac");
    });
    it("deleteChar deletes a character from a string", () => {
        expect(deleteChar({ str: "abc", char: "a" })).toEqual("bc");
    });
    it("deleteChar does not delete a character from a string if it doesn't exist in it", () => {
        expect(deleteChar({ str: "abc", char: "d" })).toEqual("abc");
    });
});
