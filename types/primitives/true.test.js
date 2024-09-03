"use strict";
const TrueT = require("./true");
describe("TrueT", () => {
    it("should return true", () => {
        const bool = new TrueT();
        expect(bool.toString()).toBe("true");
    });
});
