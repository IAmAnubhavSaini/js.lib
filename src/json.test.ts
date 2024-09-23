import { csvToJson, detectCircularity, jsonToCsv, validateJsonAndConvertToCsv } from "./json";

describe("JSON Utility Functions", () => {
    describe("detectCircularity", () => {
        it("should return false for non-circular objects", () => {
            const nonCircularObject = { a: 1, b: { c: 2 } };
            expect(detectCircularity(nonCircularObject)).toBe(false);
        });

        it("should return true for circular objects", () => {
            const circularObject: any = { a: 1 };
            circularObject.self = circularObject;
            expect(detectCircularity(circularObject)).toBe(true);
        });

        it("should return false for primitive values", () => {
            expect(detectCircularity(123)).toBe(false);
            expect(detectCircularity("test")).toBe(false);
            expect(detectCircularity(null)).toBe(false);
        });
    });

    describe("jsonToCsv", () => {
        it("should convert a simple JSON object to CSV format", () => {
            const jsonObject = { name: "John", age: 30, city: "New York" };
            const expectedCsv = "name,age,city\nJohn,30,New York";
            expect(jsonToCsv(jsonObject)).toBe(expectedCsv);
        });

        it("should convert a nested JSON object to CSV, serializing nested values", () => {
            const jsonObject = { name: "John", address: { city: "New York", state: "NY" } };
            const expectedCsv = 'name,address\nJohn,{"city":"New York","state":"NY"}';
            expect(jsonToCsv(jsonObject)).toBe(expectedCsv);
        });

        it("should handle JSON objects with null and boolean values", () => {
            const jsonObject = { name: "John", isActive: true, age: null };
            const expectedCsv = "name,isActive,age\nJohn,true,null";
            expect(jsonToCsv(jsonObject)).toBe(expectedCsv);
        });
    });

    describe("validateJsonAndConvertToCsv", () => {
        it("should return null for invalid JSON strings", () => {
            const invalidJsonString = '{ name: "John" ';
            expect(validateJsonAndConvertToCsv(invalidJsonString)).toBeNull();
        });

        it("should convert a valid JSON string to CSV format", () => {
            const validJsonString = `{
          "name": "John",
          "age": 30,
          "address": { "city": "New York", "state": "NY" }
        }`;
            const expectedCsv = 'name,age,address\nJohn,30,{"city":"New York","state":"NY"}';
            expect(validateJsonAndConvertToCsv(validJsonString)).toBe(expectedCsv);
        });
    });
});

describe("csvToJson", () => {
    it("successfully converts valid CSV to JSON", () => {
        const csv = "name,age,city\nJohn,30,New York";
        const expectedJson = JSON.stringify([{ name: "John", age: "30", city: "New York" }]);
        expect(JSON.stringify(csvToJson(csv))).toEqual(expectedJson);
    });

    it("should handle nested JSON values in CSV", () => {
        // There is something wrong here...
        const csv = 'name,age,city\nJohn,30,New York\nGruhn,56,"{"area":"fifty","city":"el dorado"}"';

        const expectedJson = JSON.stringify([
            { name: "John", age: "30", city: "New York" },
            { name: "Gruhn", age: "56", city: "{area:fifty,city:el dorado}" },
        ]);

        expect(JSON.stringify(csvToJson(csv))).toEqual(expectedJson);
    });
});
