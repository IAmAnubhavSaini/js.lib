const {objectToString} = require("./object");

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
        const obj = { a: "absolute", "b": "bold", "c 3": "hmm"};
        const actual = objectToString(obj);
        const expected = "[a:absolute][b:bold][c 3:hmm]";
        expect(actual).toEqual(expected);
    });
    it("returns proper value for a nested object", () => {
        const obj = { a: "absolute", "b": "bold", "c 3": "hmm", "-1": { d: 10, e: [1, 2, 3]}};
        const actual = objectToString(obj);
        const expected = "[a:absolute][b:bold][c 3:hmm][-1:[d:10][e:[0:1][1:2][2:3]]]";
        expect(actual).toEqual(expected);
    });

});
