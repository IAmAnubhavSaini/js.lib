const { runes, verifyBasicMultilingualPlane, nextRune, previousRune } = require("./runes");

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

describe("nextRune", () => {
    it("returns the next rune in a string with surrogate pairs", () => {
        const value = { input: "👨‍👩‍👧‍👦" };
        const actual = nextRune(value);
        expect(actual).toEqual("👩");
    });

    it("returns the next rune in a string without surrogate pairs", () => {
        const value = { input: "👩" };
        const actual = nextRune(value);
        expect(actual).toEqual("👪");
    });

    it("returns the default rune if the input string is empty", () => {
        expect(nextRune({ input: "" })).toEqual("😋");
    });

    it("returns the default rune if the input is not a string", () => {
        // @ts-ignore Testing for failure cases; should return the default rune
        expect(nextRune({ input: 123 })).toEqual("😋");
    });

    it("returns b if the input is a", () => {
        expect(nextRune({ input: "a" })).toEqual("b");
    });
});

describe("previousRune", () => {
    it("returns the previous rune in a string with surrogate pairs", () => {
        const value = { input: "👨‍👩‍👧‍👦" };
        const actual = previousRune(value);
        expect(actual).toEqual("👧");
    });

    it("returns the previous rune in a string without surrogate pairs", () => {
        const value = { input: "👩" };
        const actual = previousRune(value);
        expect(actual).toEqual("👨");
    });

    it("returns the default rune if the input string is empty", () => {
        expect(previousRune({ input: "" })).toEqual("😉");
    });

    it("returns the default rune if the input is not a string", () => {
        // @ts-ignore Testing for failure cases; should return the default rune
        expect(previousRune({ input: 123 })).toEqual("😉");
    });
});
