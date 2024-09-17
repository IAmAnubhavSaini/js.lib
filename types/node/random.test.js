"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./random");
describe("int", () => {
    it("returns a random integer", () => {
        expect((0, random_1.int)()).toBeGreaterThanOrEqual(-1 * 2 ** 31);
        expect((0, random_1.int)()).toBeLessThanOrEqual(2 ** 31);
    });
});
describe("posint", () => {
    it("returns a random positive integer", () => {
        expect((0, random_1.posint)()).toBeGreaterThanOrEqual(0);
        expect((0, random_1.posint)()).toBeLessThanOrEqual(2 ** 31);
    });
});
describe("negint", () => {
    it("returns a random integer", () => {
        expect((0, random_1.negint)()).toBeGreaterThanOrEqual(-1 * 2 ** 31);
        expect((0, random_1.negint)()).toBeLessThanOrEqual(0);
    });
});
