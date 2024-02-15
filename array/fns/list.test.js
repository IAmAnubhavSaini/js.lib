const { filterReduce, foldl, foldr, take, takeWhile } = require("./list");

describe("list", () => {
    describe("filterReduce", () => {
        it("should filter and reduce", () => {
            const result = filterReduce(
                a => a % 2 === 0,
                (acc, cur) => acc + cur,
                0,
                [1, 2, 3, 4]
            );
            expect(result).toBe(6);
        });
    });
    describe("foldr", () => {
        it("should fold right", () => {
            const sum = (a, b) => a + b;
            const result = foldr(sum, 0, [1, 2, 3, 4]);
            expect(result).toBe(10);
        });
        it("should fold right and differ from fold left", () => {
            const sum = (a, b) => a + b;
            const result = foldr(sum, '0', [1, 2, 3, 4]); // 12340
            const result2 = foldl(sum, '0', [1, 2, 3, 4]); // 01234
            // console.log({result, result2});
            expect(result).not.toBe(result2);
        });
    });
    describe("foldl", () => {
        it("should fold left", () => {
            const sum = (a, b) => a + b;
            const result = foldl(sum, 0, [1, 2, 3, 4]);
            expect(result).toBe(10);
        });
    });
    describe("take", () => {
        it("should take", () => {
            const result = take(2, [1, 2, 3, 4]);
            expect(result).toEqual([1, 2]);
        });
    });
    describe("takeWhile", () => {
        it("should take while", () => {
            const result = takeWhile(a => a < 3, [1, 2, 3, 4]);
            expect(result).toEqual([1, 2]);
        });
    });
});
