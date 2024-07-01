import { BASE_64_DEFAULT_ALPHABET } from "./fns/base64";
import { BASE_64_DEFAULT_PAD } from "./fns/base64";
import { codePointFromBinaryString } from "./fns/base64";
import { decode } from "./fns/base64";
import { encode } from "./fns/base64";
import { tokenize } from "./fns/base64";
import { URL_SAFE_BASE_64_ALPHABET } from "./fns/base64";
import { fromAscii } from "./fns/hex";
import { fromHex } from "./fns/ascii";
/**
 * deleteChar deletes first instance of given character from a string
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to delete from.
 * @param {string} options.char - The character to delete.
 * @returns {string}
 */
export function deleteChar({ input, char }?: {
    input: string;
    char: string;
}): string;
/**
 * deleteStr deletes all instances of given string from a string
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to delete from.
 * @param {string} options.str - The string to delete.
 * @returns {string}
 */
export function deleteStr({ input, str }?: {
    input: string;
    str: string;
}): string;
/**
 * toNumber converts a string to a number
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to convert to a number.
 * @returns {number}
 */
export function toNumber({ input }?: {
    input: string;
}): number;
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
export function compareEnds({ input, str }?: {
    input: string;
    str: string;
}, { i, n }?: {
    i: boolean;
    n: number;
}): boolean;
import { containsChar } from "./fns/contains";
import { containsStr } from "./fns/contains";
import { genChar } from "./fns/iterator";
import { genCode } from "./fns/iterator";
import { runes } from "./fns/runes";
import { verifyBasicMultilingualPlane } from "./fns/runes";
import { nextRune } from "./fns/runes";
import { previousRune } from "./fns/runes";
export declare namespace base64 {
    export { BASE_64_DEFAULT_ALPHABET };
    export { BASE_64_DEFAULT_PAD };
    export { codePointFromBinaryString };
    export { decode };
    export { encode };
    export { tokenize };
    export { URL_SAFE_BASE_64_ALPHABET };
}
export declare namespace hex {
    export { fromAscii };
}
export declare namespace ascii {
    export { fromHex };
}
export { containsChar, containsStr, genChar, genCode, runes, verifyBasicMultilingualPlane, nextRune, previousRune };
