/**
 * Represents a custom string class with various string manipulation methods.
 * @class
 */
declare class StringT {
    #private;
    /**
     * StringT constructor
     * @constructor
     * @param {string | number | [] | {}} value - The value that can be converted to string
     */
    constructor(value: any);
    /**
     * Creates a StringT object from an array.
     * @param {Array} value - The array to create the StringT object from.
     * @returns {StringT} The created StringT object.
     */
    static fromArray(value: any): StringT;
    /**
     * Creates a new StringT instance from an object.
     * @param {any} value - The value to convert to a string.
     * @returns {StringT} - The new StringT instance.
     */
    static fromObject(value: any): StringT;
    /**
     * Create an empty string
     * @returns {StringT} - The empty string
     * */
    static empty(): StringT;
    get length(): any;
    /**
     * Check if the string is ASCII
     * @memberof StringT
     */
    isAscii(): boolean;
    /**
     * Check if the string is alphabetic
     * @memberof StringT
     */
    isAlphabetic(): boolean;
    /**
     * Check if the string is numeric i.e. numbers only
     * @memberof StringT
     */
    isNumeric(): boolean;
    /**
     * Check if the string is alphanumeric
     * @memberof StringT
     */
    isAlphaNumeric(): boolean;
    /**
     * Check if the string is lowercase
     * @memberof StringT
     */
    isLowerCase(): boolean;
    /**
     * Check if the string is uppercase
     * @memberof StringT
     */
    isUpperCase(): boolean;
    /**
     * Convert the string to lowercase
     * @memberof StringT
     */
    toLowerCase(): StringT;
    /**
     * Convert the string to uppercase
     * @memberof StringT
     */
    toLocaleLowerCase(): StringT;
    /**
     * Convert the string to uppercase
     * @memberof StringT
     */
    toUpperCase(): StringT;
    /**
     * Convert the string to uppercase using locale
     * @returns {StringT} - The uppercase string
     * @memberof StringT
     * */
    toLocaleUpperCase(): StringT;
    /**
     * Convert the string to a js string
     * @returns {string} - The string value
     * */
    toString(): any;
    /**
     * Convert the string to a js string
     * @returns {string} - The string value
     */
    toValue(): any;
    /**
     * Convert the string to an object
     * @returns {Object} - The StringT object
     */
    toObject(): {
        StringT: {
            value: any;
            length: any;
            isAscii: boolean;
            isAlphabetic: boolean;
            isNumeric: boolean;
            isAlphaNumeric: boolean;
            isLowerCase: boolean;
            isUpperCase: boolean;
            isPalindrome: boolean;
        };
    };
    /**
     * Check if the string is equal to another string
     * @param {StringT} other - The other StringT to compare
     * @returns {boolean} - True if the strings are equal, false otherwise
     */
    isEqual(other: any): boolean;
    /**
     * Check if the string is equal to another string for the first n characters
     * @param {StringT} other - The other StringT to compare
     * @param {number} n - The number of characters to compare
     * @returns {boolean} - True if the strings are equal for the first n characters, false otherwise
     */
    isEqualFirstN(other: any, n?: number): boolean;
    /**
     * Checks if the last `n` characters of the current string are equal to the last `n` characters of another string.
     * @param {StringT|string} other - The other string to compare with.
     * @param {number} n - The number of characters to compare from the end of the strings.
     * @returns {boolean} - `true` if the last `n` characters are equal, `false` otherwise.
     */
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
    frequency(char?: string): any;
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
    padRight(n: any, fill?: string): StringT;
    /**
     * padStart - Pad the string from the start
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     * @memberof StringT
     */
    padStart(n: any, fill?: string): StringT;
    /**
     * padLeft - Pad the string from the start
     * @param {number} n - The number of characters to pad
     * @param {string} fill - The fill character
     * @returns {StringT} - The padded string
     * @function padLeft
     * @memberof StringT
     */
    padLeft(n: any, fill?: string): StringT;
    /**
     * concat - Concatenate two strings
     * @param {StringT} other - The other string to concatenate
     * @returns {StringT} - The concatenated string
     * @function concat
     * @memberof StringT
     * */
    concat(other: any): StringT;
    /**
     * append - Append a string to another string
     * @param {StringT} other - The string to append
     * @returns {StringT} - The appended string
     * @function append
     * @memberof StringT
     * */
    append(other: any): StringT;
    /**
     * prepend - Prepend a string to another string
     * @param {StringT} other - The string to prepend
     * @returns {StringT} - The prepended string
     * @function prepend
     * @memberof StringT
     */
    prepend(other: any): StringT;
}
export default StringT;
