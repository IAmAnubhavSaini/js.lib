/**
 * platform
 * @returns {"linux" | "win32" | "darwin"} Returns the platform type.
 *
 * Note: node can return 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', or 'win32';
 * but we don't support that yet.
 */
declare const platform: () => "linux" | "win32" | "darwin" | never;
/**
 * osname
 * @returns {"linux" | "darwin" | "windows" | never} Returns the os name.
 */
declare const osname: () => "linux" | "darwin" | "windows_nt" | never;
declare const isLinux: () => boolean;
declare const isWindows: () => boolean;
declare const isMac: () => boolean;
export { platform, osname, isLinux, isWindows, isMac };
