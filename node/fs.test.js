const { readFileSync, writeFileSync, readDirectorySync } = require("./fs");
const { join, dirname } = require("path");

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
            expect(content.length).toBeGreaterThan(3000);
            // expect(content.length).toBe(3131);
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
            const { error } = writeFileSync(filename);
            expect(error).toBeInstanceOf(Error);
        });
        it("should return an error if the content is not a string", () => {
            const { error } = writeFileSync(filename, 123);
            expect(error).toBeInstanceOf(TypeError);
        });
        it("should write the content to the file", () => {
            const { error } = writeFileSync(filename, content);
            expect(error).toBeNull();
        });
    });

    describe("readDirectorySync", () => {
        const dirName = join(__dirname, "../");
        const expected = {
            files: [
                ".editorconfig",
                ".gitignore",
                "README.md",
                "coverage.txt",
                "index.js",
                "package-lock.json",
                "package.json",
            ],
            directories: [
                ".git",
                ".idea",
                ".nyc_output",
                "array",
                "coverage",
                "heap",
                "node",
                "node_modules",
                "primitives",
                "spec",
                "string",
                "time",
            ],
        };
        it("should return correct content data in the current directory", () => {
            const { error, content } = readDirectorySync(dirName);
            expect(error).toBeNull();
            expect(content['files']).toBeTruthy();
            expect(content['directories']).toBeTruthy();
            expect(typeof content.files).toEqual(typeof expected.files);
            expect(typeof content.directories).toEqual(typeof expected.directories);
        });

        it("should return error and null content if directoryPath is missing", ()=> {
            const {error, content} = readDirectorySync();
            expect(error).toBeTruthy();
            expect(error.message).toBe("ERROR: The directory path is missing.");
            expect(content).toBe('');
        });
        it("should return error and null content if directoryPath is not string", ()=> {
            const {error, content} = readDirectorySync({});
            expect(error).toBeTruthy();
            expect(error.message).toBe("ERROR: The directory path must be a string.");
            expect(content).toBe('');
        });
        it("should return error and null content if directory doesn't exist", ()=> {
            const {error, content} = readDirectorySync("what");
            expect(error).toBeTruthy();
            expect(error.message).toBe("ERROR: The directory doesn't exist.");
            expect(content).toBe('');
        });
    });
});
