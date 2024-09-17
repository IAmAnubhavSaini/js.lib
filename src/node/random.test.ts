import { int, negint, posint } from "./random";

describe("int", () => {
    it("returns a random integer", () => {
        expect(int()).toBeGreaterThanOrEqual(-1 * 2 ** 31);
        expect(int()).toBeLessThanOrEqual(2 ** 31);
    });
});

describe("posint", () => {
    it("returns a random positive integer", () => {
        expect(posint()).toBeGreaterThanOrEqual(0);
        expect(posint()).toBeLessThanOrEqual(2 ** 31);
    });
});

describe("negint", () => {
    it("returns a random integer", () => {
        expect(negint()).toBeGreaterThanOrEqual(-1 * 2 ** 31);
        expect(negint()).toBeLessThanOrEqual(0);
    });
});
