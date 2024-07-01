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

module.exports = { genChar, genCode };
