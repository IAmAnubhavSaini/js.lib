const {
    BASE_64_DEFAULT_ALPHABET,
    BASE_64_DEFAULT_PAD,
    codePointFromBinaryString,
    decode,
    encode,
    tokenize,
    URL_SAFE_BASE_64_ALPHABET,
} = require("./fns/base64");

const { fromAscii } = require("./fns/hex");
const { fromHex } = require("./fns/ascii");
const { containsChar, containsStr } = require("./fns/contains");
const { genChar, genCode, rangeAscii, rangeUnicode } = require("./fns/iterator");
const { runes, verifyBasicMultilingualPlane, nextRune, previousRune } = require("./fns/runes");

/**
 * deleteChar deletes first instance of given character from a string
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to delete from.
 * @param {string} options.char - The character to delete.
 * @returns {string}
 */
function deleteChar({ input, char } = { input: "", char: "" }) {
    return input.replace(char, "");
}

/**
 * deleteStr deletes all instances of given string from a string
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to delete from.
 * @param {string} options.str - The string to delete.
 * @returns {string}
 */
function deleteStr({ input, str } = { input: "", str: "" }) {
    const re = new RegExp(str, "g");
    return input.replace(re, "");
}

/**
 * toNumber converts a string to a number
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to convert to a number.
 * @returns {number}
 */
function toNumber({ input } = { input: "0" }) {
    const value = Number(input);
    return Number.isNaN(value) ? 0 : value;
}

/**
 * compareEnds checks if a string starts and ends with a given string
 * @param {Object} inputs - The input object.
 * @param {string} inputs.input - The string to check in.
 * @param {string} inputs.str - The string to check for.
 * @param {Object} options - The options object.
 * @param {boolean} options.i - Whether to ignore case.
 * @param {number} options.n - The number of characters to check from the start and end.
 * @returns {boolean}
 * Note: If the string is empty or the string to check for is empty, it returns false.
 */
function compareEnds({ input, str } = { input: "", str: "" }, { i, n } = { i: false, n: 1 }) {
    input = typeof input === "string" ? input : "";
    str = typeof str === "string" ? str : "";
    i = typeof i === "boolean" ? i : false;
    n = typeof n === "number" ? n : 1;

    if (input.length < 1 || str.length < 1) {
        return false;
    }
    if (str.length > input.length) {
        return false;
    }
    n = typeof n === "number" ? Math.min(n, str.length) : 1;
    if (i) {
        input = input.toLowerCase();
        str = str.toLowerCase();
    }
    return input.startsWith(str) && input.endsWith(str);
}

module.exports = {
    base64: {
        BASE_64_DEFAULT_ALPHABET,
        BASE_64_DEFAULT_PAD,
        codePointFromBinaryString,
        decode,
        encode,
        tokenize,
        URL_SAFE_BASE_64_ALPHABET,
    },
    hex: {
        fromAscii,
    },
    ascii: {
        fromHex,
    },

    deleteChar,
    deleteStr,
    toNumber,
    compareEnds,
    containsChar,
    containsStr,
    genChar,
    genCode,
    runes,
    verifyBasicMultilingualPlane,
    nextRune,
    previousRune,
};
