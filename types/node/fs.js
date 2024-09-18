"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirInfo = void 0;
exports.readFileSync = readFileSync;
exports.writeFileSync = writeFileSync;
exports.readDirectorySync = readDirectorySync;
exports.processFiles = processFiles;
exports.linuxRoot = linuxRoot;
exports.windowsRoot = windowsRoot;
exports.macRoot = macRoot;
const info_1 = require("./info");
const { spawn } = require("child_process");
const { once } = require("events");
const node_fs_1 = require("node:fs");
const { join: nodePathJoin } = require("path");
/**
 * readFileSync reads a text file and returns the contents of the file as a string.
 * @param {string} filepath The absolute file path to the text file that needs to be read.
 * @returns {{error: Error, content: string}} Returns the error object and the file content.
 */
function readFileSync(filepath) {
    let content = "";
    let error = null;
    if (!filepath) {
        error = new Error("ERROR: The filepath is missing.");
        return { error, content };
    }
    if (typeof filepath !== "string") {
        error = new TypeError("ERROR: The filepath must be a string.");
        return { error, content };
    }
    try {
        content = (0, node_fs_1.readFileSync)(filepath, "utf8");
    }
    catch (readError) {
        error = new Error("ERROR: The file could not be read.\n" + readError.message);
    }
    return { error, content };
}
/**
 * writeFileSync writes a string to a file.
 * @param {string} filepath the absolute filepath to the file that needs to be written.
 * @param {string} content the content that needs to be written to the file.
 * @returns {{error: Error}} {error} Returns an object; that contains the `error` object.
 */
function writeFileSync(filepath, content = "") {
    let error = null;
    if (!filepath) {
        error = new Error("ERROR: The filepath is missing.");
        return { error };
    }
    if (typeof filepath !== "string") {
        error = new TypeError("ERROR: The filepath must be a string.");
        return { error };
    }
    if (!content) {
        error = new Error("ERROR: The content is missing.");
        return { error };
    }
    if (typeof content !== "string") {
        error = new TypeError("ERROR: The content must be a string.");
        return { error };
    }
    try {
        (0, node_fs_1.writeFileSync)(filepath, content, "utf8");
    }
    catch (writeError) {
        error = new Error("ERROR: The file could not be written.\n" + writeError.message);
    }
    return { error };
}
/**
 *
 * @param {string} directoryPath
 * @returns {{error: Error | null, content: {files: string[], directories: string[]}}} an object containing list of files and directories.
 */
function readDirectorySync(directoryPath) {
    let content = { files: [], directories: [] };
    let error = null;
    if (!directoryPath) {
        error = new Error("ERROR: The directory path is missing.");
        return { error, content };
    }
    if (typeof directoryPath !== "string") {
        error = new TypeError("ERROR: The directory path must be a string.");
        return { error, content };
    }
    if (!(0, node_fs_1.existsSync)(directoryPath)) {
        error = new RangeError("ERROR: The directory doesn't exist.");
        return { error, content };
    }
    try {
        const files = [], directories = [];
        const readContent = (0, node_fs_1.readdirSync)(directoryPath);
        for (const f of readContent) {
            const newPath = nodePathJoin(directoryPath, f);
            if (!(0, node_fs_1.existsSync)(newPath)) {
                continue;
            }
            if ((0, node_fs_1.statSync)(newPath).isDirectory()) {
                directories.push(f);
            }
            else {
                files.push(f);
            }
        }
        content = { files, directories };
    }
    catch (readError) {
        error = new Error("ERROR: The directory could not be read.\n" + readError.message);
    }
    return { error, content };
}
class DirInfo {
    path;
    info = [];
    constructor(path) {
        this.path = path;
        this.info = [];
        if (!(0, node_fs_1.existsSync)(path)) {
            return this;
        }
        try {
            const readContent = (0, node_fs_1.readdirSync)(path);
            for (const f of readContent) {
                const newPath = nodePathJoin(path, f);
                if (!(0, node_fs_1.existsSync)(newPath)) {
                    continue;
                }
                const stat = (0, node_fs_1.statSync)(newPath);
                this.info.push({
                    ...stat,
                    path: newPath,
                    parent: path,
                    name: f,
                    isDirectory: stat.isDirectory(),
                    isBlockDevice: stat.isBlockDevice(),
                    isCharacterDevice: stat.isCharacterDevice(),
                    isSymbolicLink: stat.isSymbolicLink(),
                    isFIFO: stat.isFIFO(),
                    isSocket: stat.isSocket(),
                });
            }
        }
        catch (e) {
            console.error(e);
            this.info = [];
        }
    }
    toJson() {
        return JSON.stringify({ path: this.path, info: this.info });
    }
    toPrettyJson() {
        return JSON.stringify({ path: this.path, info: this.info }, null, 4);
    }
    get directories() {
        return this.info.filter((i) => i.isDirectory);
    }
    get files() {
        return this.info.filter((i) => !i.isDirectory);
    }
}
exports.DirInfo = DirInfo;
/**
 * Processes files and directories starting from a given directory path.
 *
 * @param {Object} options - The options object.
 * @param {string} options.directoryPath - The path to the directory to process.
 * @param {Function} options.fileProcessorFn - Function to process each file.
 * @param {Function} options.directoryProcessorFn - Function to process each directory.
 */
function processFiles({ directoryPath, fileProcessorFn, directoryProcessorFn }) {
    const { files, directories } = readDirectorySync(directoryPath).content;
    if (fileProcessorFn) {
        files.forEach((file) => fileProcessorFn(nodePathJoin(directoryPath, file)));
    }
    directories.forEach((directory) => {
        if (directoryProcessorFn) {
            directoryProcessorFn(directory);
        }
        processFiles({
            directoryPath: nodePathJoin(directoryPath, directory),
            fileProcessorFn,
            directoryProcessorFn,
        });
    });
}
/**
 * root directories for windows
 * @returns {Promise<Result<string>>}
 */
async function windowsRoot() {
    if (!info_1.isWindows) {
        return { ok: false, error: "ERROR: Not windows." };
    }
    const wmic = spawn("wmic", ["logicaldisk", "get", "name"]);
    const [first] = await Promise.race([once(wmic.stdout, "data"), once(wmic.stderr, "data"), once(wmic, "error")]);
    if (first instanceof Error) {
        return { ok: false, error: first.message };
    }
    else {
        return {
            ok: true,
            result: first
                .toString()
                .replace("Name", "")
                .replace(/\r/g, "")
                .replace(/ /g, "")
                .split("\n")
                .filter((i) => i),
        };
    }
}
/**
 *  linuxRoot returns the root of a linux filesystem
 * @returns {Promise<Result<string>>}
 */
async function linuxRoot() {
    if (!info_1.isLinux) {
        return { ok: false, error: "ERROR: Not linux." };
    }
    return { ok: true, result: ["/"] };
}
/**
 *  macRoot returns the root of a mac filesystem
 * @returns {Promise<Result<string>>}
 */
async function macRoot() {
    if (!info_1.isMac) {
        return { ok: false, error: "ERROR: Not mac." };
    }
    return { ok: true, result: ["/"] };
}
