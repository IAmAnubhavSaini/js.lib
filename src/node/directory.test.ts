import exp from "constants";
import { LinuxDirectoryNode } from "./directory";

describe("LinuxDirectoryNode", () => {
    it("linux root is correctly returned", () => {
        const actual = new LinuxDirectoryNode("/", 0);
        const expected = new LinuxDirectoryNode("/");
        expect(actual.toEqual(expected)).toBeTrue();
        expect(actual.path).toEqual(expected.path);
        expect(actual.directories.length).toEqual(expected.directories.length);
    });
    it("returns root directories", () => {
        const actual = new LinuxDirectoryNode("/", 1).toString();
        const expected = "";
        expect(actual.includes("/root")).toBeTrue();
        expect(actual.includes("/bin")).toBeTrue();
        expect(actual.includes("/var")).toBeTrue();
        expect(actual.includes("/home")).toBeTrue();
    });
});
