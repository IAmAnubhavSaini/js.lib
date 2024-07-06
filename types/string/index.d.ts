import { fromHex } from "./fns/ascii";
import { BASE_64_DEFAULT_ALPHABET } from "./fns/base64";
import { BASE_64_DEFAULT_PAD } from "./fns/base64";
import { codePointFromBinaryString } from "./fns/base64";
import { decode } from "./fns/base64";
import { encode } from "./fns/base64";
import { tokenize } from "./fns/base64";
import { URL_SAFE_BASE_64_ALPHABET } from "./fns/base64";
import { getHashTags } from "./fns/hashtag";
import { hashtagFrequency } from "./fns/hashtag";
import { fromAscii } from "./fns/hex";
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
import { genChar } from "./fns/iterator";
import { genCode } from "./fns/iterator";
import { nextRune } from "./fns/runes";
import { previousRune } from "./fns/runes";
import { runes } from "./fns/runes";
/**
 * toNumber converts a string to a number
 * @param {Object} options - The options object.
 * @param {string} options.input - The string to convert to a number.
 * @returns {number}
 */
export function toNumber({ input }?: {
    input: string;
}): number;
import { verifyBasicMultilingualPlane } from "./fns/runes";
export declare namespace ascii {
    export { fromHex };
}
export declare namespace base64 {
    export { BASE_64_DEFAULT_ALPHABET };
    export { BASE_64_DEFAULT_PAD };
    export { codePointFromBinaryString };
    export { decode };
    export { encode };
    export { tokenize };
    export { URL_SAFE_BASE_64_ALPHABET };
}
export declare namespace hashtags {
    export { getHashTags };
    export { hashtagFrequency };
}
export declare namespace hex {
    export { fromAscii };
}
export { containsChar, containsStr, genChar, genCode, nextRune, previousRune, runes, verifyBasicMultilingualPlane };
