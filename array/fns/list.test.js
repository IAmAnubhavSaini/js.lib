const { foldr } = require("./list");

describe("list", () => {
    describe("foldr", () => {
        it("should fold right", () => {
            const sum = (a, b) => a + b;
            const result = foldr(sum, 0, [1, 2, 3, 4]);
            expect(result).toBe(10);
        });
    });
});
