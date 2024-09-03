import { filterReduce, foldl, foldr, take, takeWhile, head, tail } from "./list";

describe("list", () => {
    describe("filterReduce", () => {
        it("should filter and reduce", () => {
            const result = filterReduce(
                (a) => a % 2 === 0,
                (acc, cur) => acc + cur,
                0,
                [1, 2, 3, 4],
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
            const result = foldr(sum, "0", [1, 2, 3, 4]); // 12340
            const result2 = foldl(sum, "0", [1, 2, 3, 4]); // 01234
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
            const result = takeWhile((a) => a < 3, [1, 2, 3, 4]);
            expect(result).toEqual([1, 2]);
        });
    });

    describe("head", () => {
        it("should return first 10 (default) values when n is not provided", () => {
            const input = Array(100)
                .fill(0)
                .map((_, i) => i + 1);
            const actual = head(input);
            const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            expect(actual).toEqual(expected);
        });
        it("should return first 5 values when n is provided as 5", () => {
            const input = Array(100)
                .fill(0)
                .map((_, i) => i + 1);
            const actual = head(input, 5);
            const expected = [1, 2, 3, 4, 5];
            expect(actual).toEqual(expected);
        });
        it("should return if list was not an array", () => {
            const input = {};
            // @ts-ignore because we are testing a wrong input test case
            const actual = head(input);
            const expected = [];
            expect(actual).toEqual(expected);
        });
    });

    describe("tail", () => {
        it("should return last 10 (default) values when n is not provided", () => {
            const input = Array(100)
                .fill(0)
                .map((_, i) => i + 1);
            const actual = tail(input);
            const expected = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
            expect(actual).toEqual(expected);
        });
        it("should return last 5 values when n is provided as 5", () => {
            const input = Array(100)
                .fill(0)
                .map((_, i) => i + 1);
            const actual = tail(input, 5);
            const expected = [96, 97, 98, 99, 100];
            expect(actual).toEqual(expected);
        });
        it("should return if list was not an array", () => {
            const input = {};
            // @ts-ignore because we are testing a wrong input test case
            const actual = tail(input);
            const expected = [];
            expect(actual).toEqual(expected);
        });
    });
});
