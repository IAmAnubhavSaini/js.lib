const { readFileSync, writeFileSync } = require("./fs");
const {join} = require("path");

describe("fs", () => {
    describe("readFileSync", () => {
        it("should return an error if the filepath is missing", () => {
            const { error, content } = readFileSync();
            expect(error).toBeInstanceOf(Error);
            expect(content).toBe("");
        });
        it("should return an error if the filepath is not a string", () => {
            const { error, content } = readFileSync(123);
            expect(error).toBeInstanceOf(TypeError);
            expect(content).toBe("");
        });
        it("should return an error if the file could not be read", () => {
            const { error, content } = readFileSync("nonexistent.txt");
            expect(error).toBeInstanceOf(Error);
            expect(content).toBe("");
        });
        it("should return the file content", () => {
            const { error, content } = readFileSync(join(__dirname, "./fs.js"));
            expect(error).toBeNull();
            expect(content.length).toBe(2080);
        });
    });

    describe("writeFileSync", () => {
        const filename = join(__dirname, "./test.log");
        const content = "Hello, World!";
        it("should return an error if the filepath is missing", () => {
            const { error } = writeFileSync();
            expect(error).toBeInstanceOf(Error);
        });
        it("should return an error if the filepath is not a string", () => {
            const { error } = writeFileSync(123);
            expect(error).toBeInstanceOf(TypeError);
        });
        it("should return an error if the content is missing", () => {
            const {error} = writeFileSync(filename);
            expect(error).toBeInstanceOf(Error);
        });
        it("should return an error if the content is not a string", () => {
            const {error} = writeFileSync(filename, 123);
            expect(error).toBeInstanceOf(TypeError);
        });
        it("should write the content to the file", () => {
            const {error} = writeFileSync(filename, content);
            expect(error).toBeNull();
        });
    });
});
