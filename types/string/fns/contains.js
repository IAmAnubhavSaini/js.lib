"use strict";
/**
 * Check if a string contains a specific character
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to check in.
 * @param {string} options.char - The character to check for; length should be 1.
 * @returns {boolean}
 */
function containsChar({ input, char } = { input: "", char: "" }) {
    input = typeof input === "string" ? input : "";
    char = typeof char === "string" ? char : "";
    if (input.length < 1 || char.length < 1) {
        return false;
    }
    if (char.length > 1) {
        return false;
    }
    return input.includes(char);
}
/**
 * Check if a string contains a specific string
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to check in.
 * @param {string} options.str - The string to check for.
 * @returns {boolean}
 */
function containsStr({ input, str } = { input: "", str: "" }) {
    input = typeof input === "string" ? input : "";
    str = typeof str === "string" ? str : "";
    if (input.length < 1 || str.length < 1) {
        return false;
    }
    if (str.length > input.length) {
        return false;
    }
    return input.includes(str);
}
module.exports = {
    containsChar,
    containsStr,
};
