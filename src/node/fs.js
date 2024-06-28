const {
    readFileSync: nodeReadFileSync,
    writeFileSync: nodeWriteFileSync,
    readdirSync: nodeReadDirSync,
    existsSync: nodeExistsSync,
    statSync: nodeStatSync,
} = require("fs");

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
    files.forEach((file) => fileProcessorFn(nodePathJoin(directoryPath, file)));
    directories.forEach((directory) =>
        processFiles({
            directoryPath: nodePathJoin(directoryPath, directory),
            fileProcessorFn,
            directoryProcessorFn,
        }),
    );
}

module.exports = {
    readFileSync,
    writeFileSync,
    readDirectorySync,
    processFiles,
};
