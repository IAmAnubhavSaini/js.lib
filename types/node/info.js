"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMac = exports.isWindows = exports.isLinux = exports.osname = exports.platform = void 0;
const node_os_1 = require("node:os");
/**
 * platform
 * @returns {"linux" | "win32" | "darwin"} Returns the platform type.
 *
 * Note: node can return 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', or 'win32';
 * but we don't support that yet.
 */
const platform = () => process.platform.toLocaleLowerCase();
exports.platform = platform;
/**
 * osname
 * @returns {"linux" | "darwin" | "windows" | never} Returns the os name.
 */
const osname = () => (0, node_os_1.type)().toLocaleLowerCase();
exports.osname = osname;
const isLinux = () => platform() === "linux";
exports.isLinux = isLinux;
const isWindows = () => platform() === "win32";
exports.isWindows = isWindows;
const isMac = () => platform() === "darwin";
exports.isMac = isMac;
