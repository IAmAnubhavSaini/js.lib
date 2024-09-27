import { platform, osname, isLinux, isWindows, isMac } from "./info";

describe("info", () => {
    describe("platform", () => {
        it("should be a function", () => {
            expect(typeof platform).toBe("function");
        });
        it("should return the platform", () => {
            expect(["linux", "win32", "darwin"].includes(platform())).toBeTrue();
        });
    });
    describe("osname", () => {
        it("should be a function", () => {
            expect(typeof osname).toBe("function");
        });
        it("should return the os name", () => {
            expect(["linux", "windows_nt", "darwin"].includes(osname())).toBeTrue();
        });
    });
});
