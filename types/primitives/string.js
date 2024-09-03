"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { objectToString } = require("../object/object");
const { arrayToString } = require("../array/fns/array");
/**
 * Represents a custom string class with various string manipulation methods.
 * @class
 */
class StringT {
    #value;
    #frequencyMap;
    #length;
    /**
     * StringT constructor
     * @constructor
     * @param {string | number | [] | {}} value - The value that can be converted to string
     */
    constructor(value) {
        if (typeof value === "undefined") {
            return new StringT("StringT constructor ERROR: Undefined value!");
        }
        if (value === null) {
            return new StringT("StringT constructor ERROR: Null value!");
        }
        if (Array.isArray(value)) {
            return StringT.fromArray(value);
        }
        if (typeof value === "object") {
            return StringT.fromObject(value);
        }
        if (typeof value === "number") {
            return new StringT(String(Number(value)));
        }
        if (typeof value !== "string") {
            return new StringT("StringT constructor ERROR: Wrong type!");
        }
        this.#value = value;
        this.#length = value.length;
        this.#frequencyMap = null;
    }
    /**
     * Creates a StringT object from an array.
     * @param {Array} value - The array to create the StringT object from.
     * @returns {StringT} The created StringT object.
     */
    static fromArray(value) {
        if (!Array.isArray(value)) {
            return new StringT("StringT fromArray ERROR: Wrong type!");
        }
        return new StringT(arrayToString({ array: value }, { separator: "," }));
    }
    /**
     * Creates a new StringT instance from an object.
     * @param {any} value - The value to convert to a string.
     * @returns {StringT} - The new StringT instance.
     */
    static fromObject(value) {
        if (typeof value !== "object") {
            return new StringT("StringT fromObject ERROR: Wrong type!");
        }
        return new StringT(objectToString(value));
    }
    /**
     * Create an empty string
     * @returns {StringT} - The empty string
     * */
    static empty() {
        return new StringT("");
    }
    get length() {
        return this.#length;
    }
    /**
     * Check if the string is ASCII
     * @memberof StringT
     */
    isAscii() {
        return /^[\x00-\x7F]*$/.test(this.#value);
    }
    /**
     * Check if the string is alphabetic
     * @memberof StringT
     */
    isAlphabetic() {
        return /^[a-zA-Z]*$/.test(this.#value);
    }
    /**
     * Check if the string is numeric i.e. numbers only
     * @memberof StringT
     */
    isNumeric() {
        return /^[0-9]*$/.test(this.#value);
    }
    /**
     * Check if the string is alphanumeric
     * @memberof StringT
     */
    isAlphaNumeric() {
        return /^[a-zA-Z0-9]*$/.test(this.#value);
    }
    /**
     * Check if the string is lowercase
     * @memberof StringT
     */
    isLowerCase() {
        return /^[a-z]*$/.test(this.#value);
    }
    /**
     * Check if the string is uppercase
     * @memberof StringT
     */
    isUpperCase() {
        return /^[A-Z]*$/.test(this.#value);
    }
    /**
     * Convert the string to lowercase
     * @memberof StringT
     */
    toLowerCase() {
        return new StringT(this.#value.toLowerCase());
    }
    /**
     * Convert the string to uppercase
     * @memberof StringT
     */
    toLocaleLowerCase() {
        return new StringT(this.#value.toLocaleLowerCase());
    }
    /**
     * Convert the string to uppercase
     * @memberof StringT
     */
    toUpperCase() {
        return new StringT(this.#value.toUpperCase());
    }
    /**
     * Convert the string to uppercase using locale
     * @returns {StringT} - The uppercase string
     * @memberof StringT
     * */
    toLocaleUpperCase() {
        return new StringT(this.#value.toLocaleUpperCase());
    }
    /**
     * Convert the string to a js string
     * @returns {string} - The string value
     * */
    toString() {
        return this.#value;
    }
    /**
     * Convert the string to a js string
     * @returns {string} - The string value
     */
    toValue() {
        return this.#value;
    }
    /**
     * Convert the string to an object
     * @returns {Object} - The StringT object
     */
    toObject() {
        return {
            StringT: {
                value: this.#value,
                length: this.#length,
                isAscii: this.isAscii(),
                isAlphabetic: this.isAlphabetic(),
                isNumeric: this.isNumeric(),
                isAlphaNumeric: this.isAlphaNumeric(),
                isLowerCase: this.isLowerCase(),
                isUpperCase: this.isUpperCase(),
                isPalindrome: this.isPalindrome(),
            },
        };
    }
    /**
     * Check if the string is equal to another string
     * @param {StringT} other - The other StringT to compare
     * @returns {boolean} - True if the strings are equal, false otherwise
     */
    isEqual(other) {
        other = other instanceof StringT ? other : typeof other === "string" ? new StringT(other) : new StringT("");
        return this.#length === other.length && this.toValue() === other.toValue();
    }
    /**
     * Check if the string is equal to another string for the first n characters
     * @param {StringT} other - The other StringT to compare
     * @param {number} n - The number of characters to compare
     * @returns {boolean} - True if the strings are equal for the first n characters, false otherwise
     */
    isEqualFirstN(other, n = 10) {
        other = other instanceof StringT ? other : typeof other === "string" ? new StringT(other) : new StringT("");
        n = typeof n !== "number" ? 10 : Math.min(n, this.#length);
        return this.firstN(n).toValue() === other.firstN(n).toValue();
    }
    /**
     * Checks if the last `n` characters of the current string are equal to the last `n` characters of another string.
     * @param {StringT|string} other - The other string to compare with.
     * @param {number} n - The number of characters to compare from the end of the strings.
     * @returns {boolean} - `true` if the last `n` characters are equal, `false` otherwise.
     */
    isEqualLastN(other, n) {
        other = other instanceof StringT ? other : typeof other === "string" ? new StringT(other) : new StringT("");
        n = typeof n !== "number" ? 10 : Math.min(n, this.#length);
        return this.lastN(n).toValue() === other.lastN(n).toValue();
    }
    /**
     * firstN - Get the first n characters of the string
     * @param {number} n - The number of characters to get
     * @returns {StringT} - The first n characters of the string
     * */
    firstN(n = 10) {
        n = typeof n !== "number" ? 10 : Math.min(n, this.#length);
        return new StringT(this.#value.substring(0, n));
    }
    /**
     * firstNWithFill - Get the first n characters of the string with fill
     * @param {number} n - The number of characters to get
     * @param {string} fill - The fill character
     * @returns {StringT} - The first n characters of the string with fill
     * */
    firstNWithFill(n = 10, fill = "_") {
        n = typeof n !== "number" ? 10 : Math.min(n, this.#length);
        fill = typeof fill !== "string" ? "_" : fill;
        return new StringT(this.#value.substring(0, n).padEnd(n, fill));
    }
    /**
     * lastN - Get the last n characters of the string
     * @param {number} n - The number of characters to get
     * @returns {StringT} - The last n characters of the string
     * */
    lastN(n = 10) {
        n = typeof n !== "number" ? 10 : Math.min(n, this.#length);
        return new StringT(this.#value.substring(this.#length - n));
    }
    /**
     * lastNWithFill - Get the last n characters of the string with fill
     * @param {number} n - The number of characters to get
     * @param {string} fill - The fill character
     * @returns {StringT} - The last n characters of the string with fill
     */
    lastNWithFill(n = 10, fill = "_") {
        n = typeof n !== "number" ? 10 : Math.min(n, this.#length);
        fill = typeof fill !== "string" ? "_" : fill;
        return new StringT(this.#value.substring(this.#length - n).padStart(n, fill));
    }
    /**
     * generateFrequencyMap - Generate the frequency map of the string
     * @returns {Object} - The frequency map of the string
     */
    generateFrequencyMap() {
        if (this.#frequencyMap) {
            return this.#frequencyMap;
        }
        const frequencyMap = {};
        for (let i = 0; i < this.#length; i++) {
            if (frequencyMap[this.#value[i]]) {
                frequencyMap[this.#value[i]]++;
            }
            else {
                frequencyMap[this.#value[i]] = 1;
            }
        }
        this.#frequencyMap = frequencyMap;
        return this.#frequencyMap;
    }
    /**
     * frequency - Get the frequency of a character in the string
     * @param {string} char - The character to get the frequency of
     * @returns {number} - The frequency of the character in the string
     * */
    frequency(char = "e") {
        char = typeof char !== "string" ? "e" : char;
        this.generateFrequencyMap();
        return this.#frequencyMap[char] || 0;
    }
    /**
     * reverse - Reverses the string
     * @returns {StringT} - The reversed string
     * */
    reverse() {
        return new StringT(this.#value.split("").reverse().join(""));
    }
    /**
     * isPalindrome - Check if the string is a palindrome
     * @returns {boolean} - True if the string is a palindrome, false otherwise
     * */
    isPalindrome() {
        const reversed = this.#value.split("").reverse().join("");
        return this.#value === reversed;
    }
    /**
     * padEnd - Pad the string from the end
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     */
    padEnd(n = 10, fill = "_") {
        n = typeof n !== "number" ? 10 : n;
        fill = typeof fill !== "string" ? "_" : fill;
        return new StringT(this.#value.padEnd(n, fill));
    }
    /**
     * padRight - Pad the string from the end
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     * */
    padRight(n, fill = "_") {
        n = typeof n !== "number" ? 10 : n;
        fill = typeof fill !== "string" ? "_" : fill;
        return this.padEnd(n, fill);
    }
    /**
     * padStart - Pad the string from the start
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     * @memberof StringT
     */
    padStart(n, fill = "_") {
        n = typeof n !== "number" ? 10 : n;
        fill = typeof fill !== "string" ? "_" : fill;
        return new StringT(this.#value.padStart(n, fill));
    }
    /**
     * padLeft - Pad the string from the start
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     * @function padLeft
     * @memberof StringT
     */
    padLeft(n, fill = "_") {
        n = typeof n !== "number" ? 10 : n;
        fill = typeof fill !== "string" ? "_" : fill;
        return this.padStart(n, fill);
    }
    /**
     * concat - Concatenate two strings
     * @param {StringT} other - The other string to concatenate
     * @returns {StringT} - The concatenated string
     * @function concat
     * @memberof StringT
     * */
    concat(other) {
        if (!(other instanceof StringT)) {
            if (typeof other === "string") {
                other = new StringT(other);
            }
            else {
                return new StringT("StringT concat ERROR: Wrong type!");
            }
        }
        return new StringT(this.#value.toString().concat(other.toValue()));
    }
    /**
     * append - Append a string to another string
     * @param {StringT} other - The string to append
     * @returns {StringT} - The appended string
     * @function append
     * @memberof StringT
     * */
    append(other) {
        other = other instanceof StringT ? other : typeof other === "string" ? new StringT(other) : new StringT("");
        return this.concat(other);
    }
    /**
     * prepend - Prepend a string to another string
     * @param {StringT} other - The string to prepend
     * @returns {StringT} - The prepended string
     * @function prepend
     * @memberof StringT
     */
    prepend(other) {
        other = other instanceof StringT ? other : typeof other === "string" ? new StringT(other) : new StringT("");
        return new StringT(other.toValue().concat(this.#value));
    }
}
exports.default = StringT;
