"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info_1 = require("./info");
describe("info", () => {
    describe("platform", () => {
        it("should be a function", () => {
            expect(typeof info_1.platform).toBe("function");
        });
        it("should return the platform", () => {
            expect(["linux", "win32", "darwin"].includes((0, info_1.platform)())).toBeTrue();
        });
    });
    describe("osname", () => {
        it("should be a function", () => {
            expect(typeof info_1.osname).toBe("function");
        });
        it("should return the os name", () => {
            expect(["linux", "windows_nt", "darwin"].includes((0, info_1.osname)())).toBeTrue();
        });
    });
});
