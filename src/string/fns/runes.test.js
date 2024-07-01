const { runes, verifyBasicMultilingualPlane } = require("./runes");

describe("runes", () => {
    it("returns runes for ascii string", () => {
        expect(runes({ input: "abc" })).toEqual(["a", "b", "c"]);
    });
    it("returns runes of an unicode string", () => {
        const value = { input: "😊😊" };
        const actual = runes(value);
        expect(actual.length).toEqual(2);
        expect(actual).toEqual(["😊", "😊"]);
    });
    it("returns runes of a mixed ascii-unicode string", () => {
        const value = { input: "abc😊" };
        const actual = runes(value);
        expect(actual.length).toEqual(4);
        expect(actual[0]).toEqual("a");
        expect(actual[1]).toEqual("b");
        expect(actual[2]).toEqual("c");
        expect(actual[3]).toEqual("😊");
    });
    it("returns an empty array if no input is provided", () => {
        expect(runes()).toEqual([]);
    });
    it("returns an empty array if input is not a string", () => {
        // @ts-ignore Testing for failure cases; should return an empty array
        expect(runes({ input: 123 })).toEqual([]);
    });
});

describe("verifyBasicMultilingualPlane", () => {
    it("returns true if the input string contains only BMP characters", () => {
        expect(verifyBasicMultilingualPlane({ input: "abc" })).toEqual(true);
    });
    it("returns false if the input string contains non BMP characters", () => {
        expect(verifyBasicMultilingualPlane({ input: "😊😊" })).toEqual(false);
    });
    it("returns false if the input string is empty", () => {
        expect(verifyBasicMultilingualPlane({ input: "" })).toEqual(false);
    });
    it("returns false if the input is not a string", () => {
        // @ts-ignore Testing for failure cases
        expect(verifyBasicMultilingualPlane({ input: 123 })).toEqual(false);
    });
});
