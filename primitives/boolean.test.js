const BooleanT = require("./boolean");

describe("BooleanT", () => {
    it("should return true", () => {
        const bool = new BooleanT(true);
        expect(bool.toString()).toBe("true");
    });
    it("should return false", () => {
        const bool = new BooleanT(false);
        expect(bool.toString()).toBe("false");
    });
    it("should return true", () => {
        const bool = new BooleanT(true);
        expect(bool.toValue()).toBe(true);
    });
    it("should return false", () => {
        const bool = new BooleanT(false);
        expect(bool.toValue()).toBe(false);
    });
    it("should check if values are equal", () => {
        const bool = new BooleanT(true);
        const bool2 = new BooleanT(true);
        expect(bool.isEqual(bool2)).toBe(true);
    });
    it("should check if values are not equal", () => {
        const bool = new BooleanT(true);
        const bool2 = new BooleanT(false);
        expect(bool.isEqual(bool2)).toBe(false);
    });
});
