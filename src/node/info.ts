import { type } from "node:os";

const platform = process.platform;
const osname = type().toLocaleLowerCase();
const isLinux = platform === "linux";
const isWindows = platform === "win32";
const isMac = platform === "darwin";

export { platform, osname, isLinux, isWindows, isMac };
