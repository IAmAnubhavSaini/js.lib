"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = __importDefault(require("./string"));
describe("StringT", function () {
    describe("constructor", function () {
        it("should create an instance with the correct value", function () {
            const str = new string_1.default("Hello");
            expect(str.toString()).toEqual("Hello");
        });
        it("should return an error instance for non-string inputs", function () {
            const actual = new string_1.default(123);
            expect(actual.toString()).toEqual("123");
        });
    });
    describe("String Checks", function () {
        it("should correctly identify ASCII strings", function () {
            const str = new string_1.default("ASCII");
            expect(str.isAscii()).toBeTrue();
            const nonAscii = new string_1.default("é");
            expect(nonAscii.isAscii()).toBeFalse();
        });
        it("should correctly identify alphabetic strings", function () {
            const alphabetic = new string_1.default("Abc");
            expect(alphabetic.isAlphabetic()).toBeTrue();
            const nonAlphabetic = new string_1.default("123");
            expect(nonAlphabetic.isAlphabetic()).toBeFalse();
        });
        it("should correctly identify numeric strings", function () {
            const numeric = new string_1.default("123");
            expect(numeric.isNumeric()).toBeTrue();
            const nonNumeric = new string_1.default("abc");
            expect(nonNumeric.isNumeric()).toBeFalse();
        });
        // Continue with isAlphaNumeric, isLowerCase, isUpperCase...
    });
    describe("Transformation Methods", function () {
        it("should convert string to lower case", function () {
            const str = new string_1.default("HeLLo");
            const lowerStr = str.toLowerCase();
            expect(lowerStr.toString()).toEqual("hello");
        });
        // Tests for toLocaleLowerCase, toUpperCase, toLocaleUpperCase...
        it("should convert to lower case as per locale", () => {
            const str = new string_1.default("HeLLo");
            const lowerStr = str.toLocaleLowerCase();
            expect(lowerStr.toString()).toEqual("hello");
        });
        it("should convert to upper case", () => {
            const str = new string_1.default("HeLLo");
            const lowerStr = str.toUpperCase();
            expect(lowerStr.toString()).toEqual("HELLO");
        });
        it("should convert to upper case as per locale", () => {
            const str = new string_1.default("HeLLo");
            const lowerStr = str.toLocaleUpperCase();
            expect(lowerStr.toString()).toEqual("HELLO");
        });
    });
    describe("Equality and Value Retrieval", function () {
        it("should correctly compare two StringT instances for equality", function () {
            const str1 = new string_1.default("hello");
            const str2 = new string_1.default("hello");
            const str3 = new string_1.default("world");
            expect(str1.isEqual(str2)).toBeTrue();
            expect(str1.isEqual(str3)).toBeFalse();
        });
        it("should return the underlying string value", function () {
            const str = new string_1.default("hello");
            expect(str.toValue()).toEqual("hello");
        });
    });
    describe("Frequency Map and Related Methods", function () {
        it("should generate a correct frequency map", function () {
            const str = new string_1.default("hello");
            expect(str.generateFrequencyMap()).toEqual({ h: 1, e: 1, l: 2, o: 1 });
        });
        it("should return correct frequency of a character", function () {
            const str = new string_1.default("hello");
            expect(str.frequency("l")).toEqual(2);
            expect(str.frequency("x")).toEqual(0);
        });
    });
    describe("Concatenation, Append, and Prepend", function () {
        it("should concatenate two StringT instances", function () {
            const str1 = new string_1.default("Hello");
            const str2 = new string_1.default("World");
            const result = str1.concat(str2);
            expect(result.toString()).toEqual("HelloWorld");
        });
        it("should append a string to the current instance", function () {
            const str = new string_1.default("Hello");
            const result = str.append(new string_1.default("World"));
            expect(result.toString()).toEqual("HelloWorld");
        });
        it("should append a string to the current instance", function () {
            const str = new string_1.default("Hello");
            // @ts-ignore we are testing for this wrong input
            const result = str.append("World");
            expect(result.toString()).toEqual("HelloWorld");
        });
        it("should not append a non-string to the current instance", function () {
            const str = new string_1.default("Hello");
            // @ts-ignore we are testing for this wrong input
            const result = str.append(123);
            expect(result.toString()).toEqual("Hello");
        });
        it("should prepend a string to the current instance", function () {
            const str = new string_1.default("World");
            const result = str.prepend(new string_1.default("Hello"));
            expect(result.toString()).toEqual("HelloWorld");
        });
        it("should prepend a string to the current instance", function () {
            const str = new string_1.default("World");
            // @ts-ignore we are testing for this wrong input
            const result = str.prepend("Hello");
            expect(result.toString()).toEqual("HelloWorld");
        });
        it("should not prepend a non-string to the current instance", function () {
            const str = new string_1.default("World");
            // @ts-ignore we are testing for this wrong input
            const result = str.prepend(123);
            expect(result.toString()).toEqual("World");
        });
    });
    describe("toObject", () => {
        it("should return the correct object", () => {
            const str = new string_1.default("Hello");
            const obj = str.toObject();
            expect(obj).toEqual({
                StringT: {
                    value: "Hello",
                    length: 5,
                    isAscii: true,
                    isAlphabetic: true,
                    isNumeric: false,
                    isAlphaNumeric: true,
                    isLowerCase: false,
                    isUpperCase: false,
                    isPalindrome: false,
                },
            });
        });
    });
    describe("padding functions", () => {
        it("should return the correct start-padded string", () => {
            const str = new string_1.default("Hello");
            const padded = str.padStart(10, " ");
            expect(padded.toString()).toEqual("     Hello");
        });
        it("should return the correct start-padded string with default padding", () => {
            const str = new string_1.default("Hello");
            const padded = str.padStart(10);
            expect(padded.toString()).toEqual("_____Hello");
        });
        it("should return the correct end-padded string", () => {
            const str = new string_1.default("Hello");
            const padded = str.padEnd(10, " ");
            expect(padded.toString()).toEqual("Hello     ");
        });
        it("should return the correct end-padded string with default padding", () => {
            const str = new string_1.default("Hello");
            const padded = str.padEnd(10);
            expect(padded.toString()).toEqual("Hello_____");
        });
        it("should return the correct left-padded string", () => {
            const str = new string_1.default("Hello");
            const padded = str.padLeft(10, " ");
            expect(padded.toString()).toEqual("     Hello");
        });
        it("should return the correct left-padded string with default padding", () => {
            const str = new string_1.default("Hello");
            const padded = str.padLeft(10);
            expect(padded.toString()).toEqual("_____Hello");
        });
        it("should return the correct right-padded string", () => {
            const str = new string_1.default("Hello");
            const padded = str.padRight(10, " ");
            expect(padded.toString()).toEqual("Hello     ");
        });
        it("should return the correct right-padded string with default padding", () => {
            const str = new string_1.default("Hello");
            const padded = str.padRight(10);
            expect(padded.toString()).toEqual("Hello_____");
        });
    });
    describe("first N", () => {
        it("gets first N characters correctly", () => {
            const str = new string_1.default("Hello, World!");
            const actual = str.firstN(4);
            const expected = new string_1.default("Hell");
            expect(actual).toEqual(expected);
        });
        it("gets first N with default fill replacement", () => {
            const str = new string_1.default("Hi!");
            const actual = str.firstNWithFill(4);
            const expected = new string_1.default("Hi!_");
            expect(actual).toEqual(expected);
        });
        it("gets first N with given fill replacement", () => {
            const str = new string_1.default("Hi!");
            const actual = str.firstNWithFill(4, "x");
            const expected = new string_1.default("Hi!x");
            expect(actual).toEqual(expected);
        });
    });
    describe("reverse", () => {
        it("reverse a string like a normal program would do", () => {
            const str = new string_1.default("Hello!");
            const actual = str.reverse();
            const expected = new string_1.default("!olleH");
            expect(actual).toEqual(expected);
        });
        it("two reversals make no mark", () => {
            const str = new string_1.default("Hello!");
            const actual = str.reverse().reverse();
            const expected = new string_1.default("Hello!");
            expect(actual).toEqual(expected);
        });
    });
    describe("lastN functions", () => {
        it("gets last N characters correctly", () => {
            const str = new string_1.default("Hello, World!");
            const actual = str.lastN(4);
            const expected = new string_1.default("rld!");
            expect(actual).toEqual(expected);
        });
        it("gets last N with default fill replacement", () => {
            const str = new string_1.default("Hi!");
            const actual = str.lastNWithFill(4);
            const expected = new string_1.default("_Hi!");
            expect(actual).toEqual(expected);
        });
        it("gets last N with given fill replacement", () => {
            const str = new string_1.default("Hi!");
            const actual = str.lastNWithFill(4, "x");
            const expected = new string_1.default("xHi!");
            expect(actual).toEqual(expected);
        });
    });
});
describe("fromArray", function () {
    it("should create a StringT object from an array", function () {
        const array = ["H", "e", "l", "l", "o"];
        const actual = string_1.default.fromArray(array);
        const expected = "[H,e,l,l,o]";
        expect(actual.toString()).toEqual(expected);
    });
    it("should be able to handle circular references in array", () => {
        const array = ["H", "e", "l", "l", "o"];
        // @ts-ignore we are testing for this wrong input
        array.push(array);
        // @ts-ignore we are testing for this wrong input
        array.push(array);
        const actual = string_1.default.fromArray(array);
        const expected = "[H,e,l,l,o,Circular(_),Circular(_)]";
        expect(actual.toString()).toEqual(expected);
    });
    it("should be able to handle more circular references in array", () => {
        const array = ["H", "e", "l", "l", "o"];
        // @ts-ignore we are testing for this wrong input
        array.push(array);
        // @ts-ignore we are testing for this wrong input
        array.push(array);
        const tmp = [1, 2, 3];
        // @ts-ignore we are testing for this wrong input
        tmp.push(tmp);
        // @ts-ignore we are testing for this wrong input
        array.push(tmp);
        const actual = string_1.default.fromArray(array);
        const expected = "[H,e,l,l,o,Circular(_),Circular(_),[1,2,3,Circular(_[7])]]";
        expect(actual.toString()).toEqual(expected);
    });
    it("should return an error instance for non-array inputs", function () {
        // @ts-ignore we are testing for wrong input
        const actual = string_1.default.fromArray("Hello");
        expect(actual.toString()).toEqual("StringT fromArray ERROR: Wrong type!");
    });
});
describe("fromObject", function () {
    it("should create a StringT object from an object", function () {
        const obj = { 0: "H", 1: "e", 2: "l", 3: "l", 4: "o" };
        const actual = string_1.default.fromObject(obj);
        const expected = "[0:H][1:e][2:l][3:l][4:o]";
        expect(actual.toString()).toEqual(expected);
    });
    it("should return an error instance for non-object inputs", function () {
        // @ts-ignore we are testing for wrong input
        const actual = string_1.default.fromObject("Hello");
        expect(actual.toString()).toEqual("StringT fromObject ERROR: Wrong type!");
    });
});
