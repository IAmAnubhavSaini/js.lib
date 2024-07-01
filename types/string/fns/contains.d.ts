/**
 * Check if a string contains a specific character
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to check in.
 * @param {string} options.char - The character to check for; length should be 1.
 * @returns {boolean}
 */
export function containsChar({ input, char }?: {
    input: string;
    char: string;
}): boolean;
/**
 * Check if a string contains a specific string
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to check in.
 * @param {string} options.str - The string to check for.
 * @returns {boolean}
 */
export function containsStr({ input, str }?: {
    input: string;
    str: string;
}): boolean;
