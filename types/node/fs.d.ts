import { Result } from "../types/Result";
/**
 * readFileSync reads a text file and returns the contents of the file as a string.
 * @param {string} filepath The absolute file path to the text file that needs to be read.
 * @returns {{error: Error, content: string}} Returns the error object and the file content.
 */
declare function readFileSync(filepath: any): {
    error: any;
    content: string;
};
/**
 * writeFileSync writes a string to a file.
 * @param {string} filepath the absolute filepath to the file that needs to be written.
 * @param {string} content the content that needs to be written to the file.
 * @returns {{error: Error}} {error} Returns an object; that contains the `error` object.
 */
declare function writeFileSync(filepath: any, content?: string): {
    error: any;
};
/**
 *
 * @param {string} directoryPath
 * @returns {{error: Error | null, content: {files: string[], directories: string[]}}} an object containing list of files and directories.
 */
declare function readDirectorySync(directoryPath: any): {
    error: any;
    content: {
        files: any[];
        directories: any[];
    };
};
/**
 * Processes files and directories starting from a given directory path.
 *
 * @param {Object} options - The options object.
 * @param {string} options.directoryPath - The path to the directory to process.
 * @param {Function} options.fileProcessorFn - Function to process each file.
 * @param {Function} options.directoryProcessorFn - Function to process each directory.
 */
declare function processFiles({ directoryPath, fileProcessorFn, directoryProcessorFn }: {
    directoryPath: any;
    fileProcessorFn: any;
    directoryProcessorFn: any;
}): void;
/**
 * root directories for windows
 * @returns {Promise<Result<string>>}
 */
declare function windowsRoot(): Promise<Result<string>>;
/**
 *  linuxRoot returns the root of a linux filesystem
 * @returns {Promise<Result<string>>}
 */
declare function linuxRoot(): Promise<Result<string>>;
/**
 *  macRoot returns the root of a mac filesystem
 * @returns {Promise<Result<string>>}
 */
declare function macRoot(): Promise<Result<string>>;
export { readFileSync, writeFileSync, readDirectorySync, processFiles, linuxRoot, windowsRoot, macRoot };
