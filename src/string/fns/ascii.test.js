const { fromHex, verifyAscii } = require("./ascii");

describe("ascii", () => {
    it("fromHex", () => {
        expect(fromHex("68656c6c6f")).toBe("hello");
    });
    it("verifyAscii with valid input", () => {
        expect(verifyAscii("hello")).toBe(true);
    });
    it("verifyAscii with invalid input", () => {
        expect(verifyAscii("hello\x80")).toBe(false);
    });
});
