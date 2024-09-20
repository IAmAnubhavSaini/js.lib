import { filterOutKeysFromObject, filterInKeysFromObject } from "./filter";

describe("filterOutKeysFromObject", () => {
    it("should filter out the keys that were send", () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(filterOutKeysFromObject(obj, ["b"])).toEqual({ a: 1, c: 3 });
    });
});

describe("filterInKeysFromObject", () => {
    it("should filter in keys a.k.a. keep the keys and values that are passed", () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(filterInKeysFromObject(obj, ["b"])).toEqual({ b: 2 });
    });
});
