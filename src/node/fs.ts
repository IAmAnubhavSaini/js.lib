import { ErrorType, Result, ValueType, Result2 } from "../types/Result";
import { isLinux, isMac, isWindows } from "./info";

const { spawn } = require("child_process");
const { once } = require("events");

import {
    readFileSync as nodeReadFileSync,
    writeFileSync as nodeWriteFileSync,
    readdirSync as nodeReadDirSync,
    existsSync as nodeExistsSync,
    statSync as nodeStatSync,
} from "node:fs";

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
        content = nodeReadFileSync(filepath, "utf8");
    } catch (readError) {
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
        nodeWriteFileSync(filepath, content, "utf8");
    } catch (writeError) {
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
    if (!nodeExistsSync(directoryPath)) {
        error = new RangeError("ERROR: The directory doesn't exist.");
        return { error, content };
    }

    try {
        const files = [],
            directories = [];
        const readContent = nodeReadDirSync(directoryPath);
        for (const f of readContent) {
            const newPath = nodePathJoin(directoryPath, f);
            if (!nodeExistsSync(newPath)) {
                continue;
            }
            if (nodeStatSync(newPath).isDirectory()) {
                directories.push(f);
            } else {
                files.push(f);
            }
        }
        content = { files, directories };
    } catch (readError) {
        error = new Error("ERROR: The directory could not be read.\n" + readError.message);
    }
    return { error, content };
}

type InfoItem = {
    path: string;
    parent: string;
    name: string;
    isDirectory: boolean;
    isBlockDevice: boolean;
    isCharacterDevice: boolean;
    isSymbolicLink: boolean;
    isFIFO: boolean;
    isSocket: boolean;
};
class DirInfo {
    public info: InfoItem[] = [];
    constructor(public path: string) {
        this.info = [];
        if (!nodeExistsSync(path)) {
            return this;
        }
        try {
            const readContent = nodeReadDirSync(path);
            for (const f of readContent) {
                const newPath = nodePathJoin(path, f);
                if (!nodeExistsSync(newPath)) {
                    continue;
                }
                const stat = nodeStatSync(newPath);
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
        } catch (e) {
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
async function windowsRoot(): Promise<Result<string>> {
    if (!isWindows()) {
        return { ok: false, error: "ERROR: Not windows." } as ErrorType;
    }
    const wmic = spawn("wmic", ["logicaldisk", "get", "name"]);
    const [first] = await Promise.race([once(wmic.stdout, "data"), once(wmic.stderr, "data"), once(wmic, "error")]);
    if (first instanceof Error) {
        return { ok: false, error: first.message } as ErrorType;
    } else {
        return {
            ok: true,
            result: first
                .toString()
                .replace("Name", "")
                .replace(/\r/g, "")
                .replace(/ /g, "")
                .split("\n")
                .filter((i) => i),
        } as ValueType<string>;
    }
}

/**
 *  linuxRoot returns the root of a linux filesystem
 * @returns {Promise<Result<string>>}
 */
async function linuxRoot(): Promise<Result<string>> {
    if (!isLinux()) {
        return { ok: false, error: "ERROR: Not linux." } as ErrorType;
    }
    return { ok: true, result: ["/"] } as ValueType<string>;
}

/**
 *  macRoot returns the root of a mac filesystem
 * @returns {Promise<Result<string>>}
 */
async function macRoot(): Promise<Result<string>> {
    if (!isMac()) {
        return { ok: false, error: "ERROR: Not mac." } as ErrorType;
    }
    return { ok: true, result: ["/"] } as ValueType<string>;
}

export { readFileSync, writeFileSync, readDirectorySync, processFiles, linuxRoot, windowsRoot, macRoot, DirInfo };
