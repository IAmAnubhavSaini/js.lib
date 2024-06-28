/**
 * readFileSync reads a text file and returns the contents of the file as a string.
 * @param {string} filepath The absolute file path to the text file that needs to be read.
 * @returns {{error: Error, content: string}} Returns the error object and the file content.
 */
export function readFileSync(filepath: string): {
    error: Error;
    content: string;
};
/**
 * writeFileSync writes a string to a file.
 * @param {string} filepath the absolute filepath to the file that needs to be written.
 * @param {string} content the content that needs to be written to the file.
 * @returns {{error: Error}} {error} Returns an object; that contains the `error` object.
 */
export function writeFileSync(filepath: string, content?: string): {
    error: Error;
};
/**
 *
 * @param {string} directoryPath
 * @returns {{error: Error | null, content: {files: string[], directories: string[]}}} an object containing list of files and directories.
 */
export function readDirectorySync(directoryPath: string): {
    error: Error | null;
    content: {
        files: string[];
        directories: string[];
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
export function processFiles({ directoryPath, fileProcessorFn, directoryProcessorFn }: {
    directoryPath: string;
    fileProcessorFn: Function;
    directoryProcessorFn: Function;
}): void;
