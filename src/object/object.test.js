const { objectToString, deepEqual, keyEqual, valueEqual, findKeys } = require("./object");

describe("objectToString", () => {
    it("should return string", () => {
        expect(objectToString(undefined)).toBe("[]");
    });
    it("returns proper value for an array", () => {
        const obj = [1, 2, 3, 4, 5];
        const actual = objectToString(obj);
        const expected = "[0:1][1:2][2:3][3:4][4:5]";
        expect(actual).toEqual(expected);
    });
    it("returns proper value for a nested array", () => {
        const obj = [1, 2, 3, [0, -1, -2, -3], 5];
        const actual = objectToString(obj);
        const expected = "[0:1][1:2][2:3][3:[0:0][1:-1][2:-2][3:-3]][4:5]";
        expect(actual).toEqual(expected);
    });
    it("returns proper value for an object", () => {
        const obj = { a: "absolute", b: "bold", "c 3": "hmm" };
        const actual = objectToString(obj);
        const expected = "[a:absolute][b:bold][c 3:hmm]";
        expect(actual).toEqual(expected);
    });
    it("returns proper value for a nested object", () => {
        const obj = { a: "absolute", b: "bold", "c 3": "hmm", "-1": { d: 10, e: [1, 2, 3] } };
        const actual = objectToString(obj);
        const expected = "[a:absolute][b:bold][c 3:hmm][-1:[d:10][e:[0:1][1:2][2:3]]]";
        expect(actual).toEqual(expected);
    });
    // /tests for circular references
    it("returns proper value for a circular reference", () => {
        const obj = { a: "absolute", b: "bold", "c 3": "hmm", "-1": { d: 10, e: [1, 2, 3] } };
        obj["-1"].f = obj;
        const actual = objectToString(obj);
        const expected = "[a:absolute][b:bold][c 3:hmm][-1:[d:10][e:[0:1][1:2][2:3]][f:[Circular(f)]]]";
        expect(actual).toEqual(expected);
    });
});

describe("deepEqual", () => {
    it("should return true for equal objects", () => {
        const a = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            19: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 2],
                ],
            },
        };
        const b = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            19: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 2],
                ],
            },
        };
        expect(deepEqual(a, b)).toBe(true);
    });
    it("should return false for unequal objects", () => {
        const a = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            19: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 2],
                ],
            },
        };
        const b = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            19: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 2, 3],
                ],
            },
        };
        expect(deepEqual(a, b)).toBe(false);
    });
});

describe("keyEqual", () => {
    it("should return true for equal objects", () => {
        const a = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            19: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 2],
                ],
            },
        };
        const b = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            19: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    ["notice", "how", "the", "values", "are", "different"],
                ],
            },
        };
        expect(keyEqual(a, b)).toBe(true);
    });

    it("should return false for unequal objects", () => {
        const a = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            69: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 2],
                ],
            },
        };
        const b = {
            a: "a for apple",
            b: "b for bat",
            "[what a key]": "w for what a whatnow",
            42: {
                moon: 399,
                "{simple}": [
                    [1, 2, 3],
                    [0, 1, 3],
                    [1, 2, 3],
                ],
            },
        };
        expect(keyEqual(a, b)).toBe(false);
    });
});

describe("valueEqual", () => {
    it("should return true for equal objects", () => {
        const a = {
            a: "a for apple",
            b: "b for bat",
        };
        const b = {
            1: "a for apple",
            2: "b for bat",
        };
        expect(valueEqual(a, b)).toBe(true);
    });
    it("should return false for unequal objects", () => {
        const a = {
            a: "a for apple",
            b: "b for banana",
        };
        const b = {
            1: "a for apple",
            2: "b for bat",
        };
        expect(valueEqual(a, b)).toBe(false);
    });
});

describe("findKeys", () => {
    it("should return an array of keys", () => {
        const obj = {
            a: "a for apple",
            b: "b for bat",
            c: {
                d: "d for dog",
                e: "e for elephant",
                f: {
                    g: "g for gorilla",
                    h: "h for horse",
                },
            },
        };
        const actual = findKeys({ obj, value: "e for elephant" });
        const expected = ["c.e"];
        expect(actual).toEqual(expected);
    });

    it("should return an array of keys for given value upto 3 depth", () => {
        const obj = {
            a: "a for apple",
            b: "b for bat",
            c: {
                d: "d for dog",
                1: { 2: { e: "e for elephant" } },
                f: {
                    g: "g for gorilla",
                    h: "h for horse",
                },
            },
        };
        const actual = findKeys({ obj, value: "e for elephant", depth: 3 });
        const expected = [];
        expect(actual).toEqual(expected);
        // Also check that it would have found if depth was not a constrait
        expect(findKeys({ obj, value: "e for elephant" })).toEqual(["c.1.2.e"]);
    });
    it("works with arrays too", () => {
        const obj = ["a for apple", "b for bat", { c: ["d for dog", "e for elephant"] }];
        const actual = findKeys({ obj, value: "e for elephant", separator: "_" });
        const expected = ["2_c_1"];
        expect(actual).toEqual(expected);
    });

    it("finds multiple keys", () => {
        const obj = {
            a: "a for apple",
            b: "b for bat",
            c: {
                d: "d for dog",
                e: "e for elephant",
                f: {
                    g: "g for gorilla",
                    h: "h for horse",
                    a: "a for apple",
                },
                g: ["a for apple", "b for bat", "c for cat", "a for apple"],
            },
        };
        const actual = findKeys({ obj, value: "a for apple" });
        const expected = ["a", "c.f.a", "c.g.0", "c.g.3"];
        expect(actual).toEqual(expected);
    });
});
