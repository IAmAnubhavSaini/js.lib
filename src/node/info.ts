import { type } from "node:os";

/**
 * platform
 * @returns {"linux" | "win32" | "darwin"} Returns the platform type.
 *
 * Note: node can return 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', or 'win32';
 * but we don't support that yet.
 */
const platform = (): "linux" | "win32" | "darwin" | never =>
    process.platform.toLocaleLowerCase() as "linux" | "win32" | "darwin" | never;

/**
 * osname
 * @returns {"linux" | "darwin" | "windows" | never} Returns the os name.
 */
const osname = (): "linux" | "darwin" | "windows_nt" | never =>
    type().toLocaleLowerCase() as "linux" | "darwin" | "windows_nt" | never;

const isLinux = () => platform() === "linux";
const isWindows = () => platform() === "win32";
const isMac = () => platform() === "darwin";

export { platform, osname, isLinux, isWindows, isMac };
