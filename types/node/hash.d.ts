/**
 * hash256 - Generate a hash from a string; if crypto module is not available, will return a weird base64
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {string} - The hash
 */
declare function hash256({ content }?: {
    content: string;
}): any;
export { hash256 };
