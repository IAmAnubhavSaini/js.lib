"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("./json");
describe("JSON Utility Functions", () => {
    describe("detectCircularity", () => {
        it("should return false for non-circular objects", () => {
            const nonCircularObject = { a: 1, b: { c: 2 } };
            expect((0, json_1.detectCircularity)(nonCircularObject)).toBe(false);
        });
        it("should return true for circular objects", () => {
            const circularObject = { a: 1 };
            circularObject.self = circularObject;
            expect((0, json_1.detectCircularity)(circularObject)).toBe(true);
        });
        it("should return false for primitive values", () => {
            expect((0, json_1.detectCircularity)(123)).toBe(false);
            expect((0, json_1.detectCircularity)("test")).toBe(false);
            expect((0, json_1.detectCircularity)(null)).toBe(false);
        });
    });
    describe("jsonToCsv", () => {
        it("should convert a simple JSON object to CSV format", () => {
            const jsonObject = { name: "John", age: 30, city: "New York" };
            const expectedCsv = "name,age,city\nJohn,30,New York";
            expect((0, json_1.jsonToCsv)(jsonObject)).toBe(expectedCsv);
        });
        it("should convert a nested JSON object to CSV, serializing nested values", () => {
            const jsonObject = { name: "John", address: { city: "New York", state: "NY" } };
            const expectedCsv = 'name,address\nJohn,{"city":"New York","state":"NY"}';
            expect((0, json_1.jsonToCsv)(jsonObject)).toBe(expectedCsv);
        });
        it("should handle JSON objects with null and boolean values", () => {
            const jsonObject = { name: "John", isActive: true, age: null };
            const expectedCsv = "name,isActive,age\nJohn,true,null";
            expect((0, json_1.jsonToCsv)(jsonObject)).toBe(expectedCsv);
        });
    });
    describe("validateJsonAndConvertToCsv", () => {
        it("should return null for invalid JSON strings", () => {
            const invalidJsonString = '{ name: "John" ';
            expect((0, json_1.validateJsonAndConvertToCsv)(invalidJsonString)).toBeNull();
        });
        it("should convert a valid JSON string to CSV format", () => {
            const validJsonString = `{
          "name": "John",
          "age": 30,
          "address": { "city": "New York", "state": "NY" }
        }`;
            const expectedCsv = 'name,age,address\nJohn,30,{"city":"New York","state":"NY"}';
            expect((0, json_1.validateJsonAndConvertToCsv)(validJsonString)).toBe(expectedCsv);
        });
    });
});
