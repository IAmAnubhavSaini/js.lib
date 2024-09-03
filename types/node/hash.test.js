"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("./hash");
describe("hashing", () => {
    it("return a 256 bit hash", () => {
        const data = "hello";
        const { ok, result } = (0, hash_1.hash256)({ content: data });
        const expected = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
        expect(result[0]).toBe(expected);
        expect(ok).toBeTrue();
    });
    it("return a 512 bit hash", () => {
        const data = "hello";
        const { ok, result } = (0, hash_1.hash512)({ content: data });
        const expected = "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043";
        expect(result[0]).toBe(expected);
        expect(ok).toBeTrue();
    });
});
