const FalseT = require("./false");
const BooleanT = require("./boolean");

describe("FalseT", () => {
    it("should return false", () => {
        const bool = new FalseT();
        expect(bool.toString()).toBe("false");
    });
});
