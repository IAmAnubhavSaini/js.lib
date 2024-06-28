const { hash256 } = require("./hash");

describe("hash", () => {
    it("return a hash", () => {
        const data = "hello";
        const actual = hash256({ content: data });
        const expected = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
        expect(actual).toBe(expected);
    });
});
