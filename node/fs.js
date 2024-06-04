const {
    readFileSync: nodeReadFileSync,
    writeFileSync: nodeWriteFileSync,
    readdirSync: nodeReadDirSync,
    existsSync,
    statSync
} = require("fs");
const {join} = require("path");

/**
 * readFileSync reads a text file and returns the contents of the file as a string.
 * @param {string} filepath The absolute file path to the text file that needs to be read.
 * @returns {{Error, string}} Returns the error object and the file content.
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
 * @returns {{Error}} {error} Returns an object that contains the `error` object.
 */
function writeFileSync(filepath, content) {
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
 * @returns {{files: [string], directories: [string]}} an object containing list of files and directories.
 */
function readDirectorySync(directoryPath) {
    let content = "";
    let error = null;
    if (!directoryPath) {
        error = new Error("ERROR: The directory path is missing.");
        return { error, content };
    }
    if (typeof directoryPath !== "string") {
        error = new TypeError("ERROR: The directory path must be a string.");
        return { error, content };
    }
    if(!existsSync(directoryPath)) {
        error = new RangeError("ERROR: The directory doesn't exist.");
        return {error, content};
    }

    try {
        const files = [], directories =[];
        const readContent = nodeReadDirSync(directoryPath);
        for(const f of readContent) {
            const newPath = join(directoryPath, f);
            if(!existsSync(newPath)) {
                continue;
            }
            if(statSync(newPath).isDirectory()) {
                directories.push(f);
            } else {
                files.push(f);
            }
        }
        content = {files, directories};
    } catch (readError) {
        error = new Error("ERROR: The directory could not be read.\n" + readError.message);
    }
    return { error, content };
}

module.exports = {
    readFileSync,
    writeFileSync,
    readDirectorySync
};
