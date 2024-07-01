const { nextRune } = require("./runes");

/**
 * genChar - creates a generator out of a given string and returns characters of string one by one.
 * @generator
 * @function genChar
 * @param {Object} values - The values object.
 * @param {string} values.input - The string to convert to a generator.
 * @yields {string} The next character of the input string.
 */
function* genChar({ input } = { input: "" }) {
    input = typeof input === "string" ? input : "";
    let i = 0;
    while (i < input.length) {
        yield input[i];
        i++;
    }
}

/**
 * Generates a sequence of character codes from the given input string.
 * @generator
 * @function genCode
 * @param {Object} [options] - The options for generating the character codes.
 * @param {string} [options.input=""] - The input string.
 * @yields {number} The next character code in the sequence.
 */
function* genCode({ input } = { input: "" }) {
    input = typeof input === "string" ? input : "";
    let i = 0;
    while (i < input.length) {
        yield input.charCodeAt(i);
        i++;
    }
}

/**
 * Generates a sequence of characters from the given input string.
 * @generator
 * @function rangeAscii
 * @param {Object} [values] - The values for generating the character codes.
 * @param {string} [values.input="a-z"] - The input string.
 * @yields {string} The next character in the sequence.
 */
function* rangeAscii({ input } = { input: "a-z" }) {
    input = typeof input === "string" ? input : "a-z";
    let [start, end] = input.split("-").map((x) => x.charCodeAt(0));
    if (start > end) {
        return "";
    }
    while (start <= end) {
        yield String.fromCharCode(start);
        start++;
    }
}

/**
 * Generates a sequence of characters from the given input unicode string.
 * @generator
 * @function rangeUnicode
 * @param {Object} [values] - The values for generating the character codes.
 * @param {string} [values.input="😊-😋"] - The input string.
 * @yields {string} The next character in the sequence.
 * @todo Implement the function.
 */
function* rangeUnicode({ input } = { input: "😊-😋" }) {
    input = typeof input === "string" ? input : "😊-😋";
    let [start, end] = input.split("-");
    if (start > end) {
        return "";
    }
    while (start <= end) {
        yield start;
        start = nextRune({ input: start });
    }
}

module.exports = { genChar, genCode, rangeAscii, rangeUnicode };
