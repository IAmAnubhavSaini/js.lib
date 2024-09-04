"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directory_1 = require("./directory");
describe("LinuxDirectoryNode", () => {
    it("linux root is correctly returned", () => {
        const actual = new directory_1.LinuxDirectoryNode("/", 0);
        const expected = new directory_1.LinuxDirectoryNode("/");
        expect(actual.toEqual(expected)).toBeTrue();
        expect(actual.path).toEqual(expected.path);
        expect(actual.directories.length).toEqual(expected.directories.length);
    });
    it("returns root directories", () => {
        const actual = new directory_1.LinuxDirectoryNode("/", 1).toString();
        const expected = "";
        expect(actual.includes("/root")).toBeTrue();
        expect(actual.includes("/bin")).toBeTrue();
        expect(actual.includes("/var")).toBeTrue();
        expect(actual.includes("/home")).toBeTrue();
    });
});
