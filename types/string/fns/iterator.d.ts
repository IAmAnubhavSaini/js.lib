/**
 * genChar - creates a generator out of a given string and returns characters of string one by one.
 * @generator
 * @function genChar
 * @param {Object} values - The values object.
 * @param {string} values.input - The string to convert to a generator.
 * @yields {string} The next character of the input string.
 */
export function genChar({ input }?: {
    input: string;
}): Generator<string, void, unknown>;
/**
 * Generates a sequence of character codes from the given input string.
 * @generator
 * @function genCode
 * @param {Object} [options] - The options for generating the character codes.
 * @param {string} [options.input=""] - The input string.
 * @yields {number} The next character code in the sequence.
 */
export function genCode({ input }?: {
    input?: string;
}): Generator<number, void, unknown>;
/**
 * Generates a sequence of characters from the given input string.
 * @generator
 * @function rangeAscii
 * @param {Object} [values] - The values for generating the character codes.
 * @param {string} [values.input="a-z"] - The input string.
 * @yields {string} The next character in the sequence.
 */
export function rangeAscii({ input }?: {
    input?: string;
}): Generator<string, string, unknown>;
/**
 * Generates a sequence of characters from the given input unicode string.
 * @generator
 * @function rangeUnicode
 * @param {Object} [values] - The values for generating the character codes.
 * @param {string} [values.input="😊-😋"] - The input string.
 * @yields {string} The next character in the sequence.
 * @todo Implement the function.
 */
export function rangeUnicode({ input }?: {
    input?: string;
}): Generator<string, string, unknown>;
