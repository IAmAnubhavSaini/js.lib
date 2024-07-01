export = StringT;
/**
 * StringT class
 * @class
 * @classdesc StringT class to handle string operations
 */
/**
 * Represents a custom string class.
 * @class
 */
declare class StringT {
    /**
     * Create an empty string
     * @returns {StringT} - The empty string
     * */
    static empty(): StringT;
    /**
     * StringT constructor
     * @constructor
     * @param {string} value - The string value
     */
    constructor(value: string);
    get length(): number;
    /**
     * Check if the string is ASCII
     */
    isAscii(): boolean;
    /**
     * Check if the string is alphabetic
     */
    isAlphabetic(): boolean;
    /**
     * Check if the string is numeric i.e. numbers only
     */
    isNumeric(): boolean;
    /**
     * Check if the string is alphanumeric
     */
    isAlphaNumeric(): boolean;
    /**
     * Check if the string is lowercase
     */
    isLowerCase(): boolean;
    /**
     * Check if the string is uppercase
     */
    isUpperCase(): boolean;
    /**
     * Convert the string to lowercase
     */
    toLowerCase(): StringT;
    /**
     * Convert the string to uppercase
     */
    toLocaleLowerCase(): StringT;
    /**
     * Convert the string to uppercase
     */
    toUpperCase(): StringT;
    /**
     * Convert the string to uppercase using locale
     * @returns {StringT} - The uppercase string
     * */
    toLocaleUpperCase(): StringT;
    /**
     * Convert the string to a js string
     * @returns {string} - The string value
     * */
    toString(): string;
    /**
     * Convert the string to a js string
     * @returns {string} - The string value
     */
    toValue(): string;
    /**
     * Convert the string to an object
     * @returns {Object} - The StringT object
     */
    toObject(): any;
    /**
     * Check if the string is equal to another string
     * @param {StringT} other - The other StringT to compare
     * @returns {boolean} - True if the strings are equal, false otherwise
     */
    isEqual(other: StringT): boolean;
    /**
     * Check if the string is equal to another string for the first n characters
     * @param {StringT} other - The other StringT to compare
     * @param {number} n - The number of characters to compare
     * @returns {boolean} - True if the strings are equal for the first n characters, false otherwise
     */
    isEqualFirstN(other: StringT, n?: number): boolean;
    isEqualLastN(other: any, n: any): boolean;
    /**
     * firstN - Get the first n characters of the string
     * @param {number} n - The number of characters to get
     * @returns {StringT} - The first n characters of the string
     * */
    firstN(n?: number): StringT;
    /**
     * firstNWithFill - Get the first n characters of the string with fill
     * @param {number} n - The number of characters to get
     * @param {string} fill - The fill character
     * @returns {StringT} - The first n characters of the string with fill
     * */
    firstNWithFill(n?: number, fill?: string): StringT;
    /**
     * lastN - Get the last n characters of the string
     * @param {number} n - The number of characters to get
     * @returns {StringT} - The last n characters of the string
     * */
    lastN(n?: number): StringT;
    /**
     * lastNWithFill - Get the last n characters of the string with fill
     * @param {number} n - The number of characters to get
     * @param {string} fill - The fill character
     * @returns {StringT} - The last n characters of the string with fill
     */
    lastNWithFill(n?: number, fill?: string): StringT;
    /**
     * generateFrequencyMap - Generate the frequency map of the string
     * @returns {Object} - The frequency map of the string
     */
    generateFrequencyMap(): any;
    /**
     * frequency - Get the frequency of a character in the string
     * @param {string} char - The character to get the frequency of
     * @returns {number} - The frequency of the character in the string
     * */
    frequency(char?: string): number;
    /**
     * reverse - Reverses the string
     * @returns {StringT} - The reversed string
     * */
    reverse(): StringT;
    /**
     * isPalindrome - Check if the string is a palindrome
     * @returns {boolean} - True if the string is a palindrome, false otherwise
     * */
    isPalindrome(): boolean;
    /**
     * padEnd - Pad the string from the end
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     */
    padEnd(n?: number, fill?: string): StringT;
    /**
     * padRight - Pad the string from the end
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     * */
    padRight(n: number, fill?: string): StringT;
    /**
     * padStart - Pad the string from the start
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     */
    padStart(n: number, fill?: string): StringT;
    /**
     * padLeft - Pad the string from the start
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     */
    padLeft(n: number, fill?: string): StringT;
    /**
     * concat - Concatenate two strings
     * @param {StringT} other - The other string to concatenate
     * @returns {StringT} - The concatenated string
     * */
    concat(other: StringT): StringT;
    /**
     * append - Append a string to another string
     * @param {StringT} other - The string to append
     * @returns {StringT} - The appended string
     * */
    append(other: StringT): StringT;
    /**
     * prepend - Prepend a string to another string
     * @param {StringT} other - The string to prepend
     * @returns {StringT} - The prepended string
     */
    prepend(other: StringT): StringT;
    #private;
}
