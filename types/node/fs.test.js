"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info_1 = require("./info");
const fs_1 = require("./fs");
const { join } = require("path");
describe("fs", () => {
    describe("readFileSync", () => {
        it("should return an error if the filepath is missing", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error, content } = (0, fs_1.readFileSync)();
            expect(error).toBeInstanceOf(Error);
            expect(content).toBe("");
        });
        it("should return an error if the filepath is not a string", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error, content } = (0, fs_1.readFileSync)(123);
            expect(error).toBeInstanceOf(TypeError);
            expect(content).toBe("");
        });
        it("should return an error if the file could not be read", () => {
            const { error, content } = (0, fs_1.readFileSync)("nonexistent.txt");
            expect(error).toBeInstanceOf(Error);
            expect(content).toBe("");
        });
        it("should return the file content", () => {
            const { error, content } = (0, fs_1.readFileSync)(join(__dirname, "./fs.js"));
            expect(error).toBeNull();
            expect(content.length).toBeGreaterThan(3000);
            // expect(content.length).toBe(3131);
        });
    });
    describe("writeFileSync", () => {
        const filename = join(__dirname, "./test.log");
        const content = "Hello, World!";
        it("should return an error if the filepath is missing", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error } = (0, fs_1.writeFileSync)();
            expect(error).toBeInstanceOf(Error);
        });
        it("should return an error if the filepath is not a string", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error } = (0, fs_1.writeFileSync)(123);
            expect(error).toBeInstanceOf(TypeError);
        });
        it("should return an error if the content is missing", () => {
            const { error } = (0, fs_1.writeFileSync)(filename);
            expect(error).toBeInstanceOf(Error);
        });
        it("should return an error if the content is not a string", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error } = (0, fs_1.writeFileSync)(filename, 123);
            expect(error).toBeInstanceOf(TypeError);
        });
        it("should write the content to the file", () => {
            const { error } = (0, fs_1.writeFileSync)(filename, content);
            expect(error).toBeNull();
        });
    });
    describe("readDirectorySync", () => {
        const dirName = join(__dirname, "../");
        const expected = {
            error: null,
            content: {
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
            },
        };
        it("should return correct content data in the current directory", () => {
            const { error, content } = (0, fs_1.readDirectorySync)(dirName);
            expect(error).toBeNull();
            expect(content["files"]).toBeTruthy();
            expect(content["directories"]).toBeTruthy();
            expect(typeof content.files).toEqual(typeof expected.content.files);
            expect(typeof content.directories).toEqual(typeof expected.content.directories);
        });
        it("should return error and null content if directoryPath is missing", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error, content } = (0, fs_1.readDirectorySync)();
            expect(error).toBeTruthy();
            expect(error.message).toBe("ERROR: The directory path is missing.");
            expect(content).toEqual({ files: [], directories: [] });
        });
        it("should return error and null content if directoryPath is not string", () => {
            // @ts-ignore because we are testing a wrong input test case
            const { error, content } = (0, fs_1.readDirectorySync)({});
            expect(error).toBeTruthy();
            expect(error.message).toBe("ERROR: The directory path must be a string.");
            expect(content).toEqual({ files: [], directories: [] });
        });
        it("should return error and null content if directory doesn't exist", () => {
            const { error, content } = (0, fs_1.readDirectorySync)("what");
            expect(error).toBeTruthy();
            expect(error.message).toBe("ERROR: The directory doesn't exist.");
            expect(content).toEqual({ files: [], directories: [] });
        });
    });
    describe("processFiles", () => {
        function fileProcessorFn(file) {
            expect(typeof file).toBe("string");
        }
        function directoryProcessorFn(dir) {
            expect(typeof dir).toBe("string");
        }
        it("should processFiles just fine", () => {
            (0, fs_1.processFiles)({ directoryPath: "./tmp", fileProcessorFn, directoryProcessorFn });
        });
    });
    describe("macRoot", () => {
        it("returns correct value", async () => {
            if (info_1.isMac) {
                const { ok, result } = (await (0, fs_1.macRoot)());
                const expected = ["/"];
                expect(result).toEqual(expected);
                expect(ok).toBeTrue();
            }
            else {
                const { ok, error } = (await (0, fs_1.macRoot)());
                const expected = "ERROR: Not mac.";
                expect(error).toEqual(expected);
                expect(ok).toBeFalse();
            }
        });
    });
    describe("linuxRoot", () => {
        it("returns correct value", async () => {
            if (info_1.isLinux) {
                const { ok, result } = (await (0, fs_1.linuxRoot)());
                const expected = ["/"];
                expect(result).toEqual(expected);
                expect(ok).toBeTrue();
            }
            else {
                const { ok, error } = (await (0, fs_1.linuxRoot)());
                const expected = "ERROR: Not linux.";
                expect(error).toEqual(expected);
                expect(ok).toBeFalse();
            }
        });
    });
    describe("windowsRoot", () => {
        it("returns correct value", async () => {
            if (info_1.isWindows) {
                const { ok, result } = (await (0, fs_1.windowsRoot)());
                expect(ok).toBeTrue();
                expect(result.length > 0).toBeTrue();
            }
            else {
                const { ok, error } = (await (0, fs_1.windowsRoot)());
                expect(ok).toBeFalse();
                expect(error).toBe("ERROR: Not windows.");
            }
        });
    });
});
describe("DirInfo", () => {
    it("generates list of files and directories for a valid path", () => {
        const dirinfo = new fs_1.DirInfo("./src/node");
        const files = dirinfo.files;
        const directories = dirinfo.directories;
        // console.log({ files, directories, info: dirinfo.info, dirinfo });
        expect(files.some((f) => f.name.includes("fs.ts"))).toBeTrue();
        expect(directories.some((d) => d.name.includes("stream"))).toBeTrue();
    });
});
