import { Result2 } from "../../types/Result";
/**
 *
 * @param {Object} options - The options object.
 * @param {number} options.length - The length of the array.
 * @param {*} options.defaultValue - The default value of the array.
 * @returns {*[]}
 */
declare function defaultArray({ length, defaultValue }?: {
    length: number;
    defaultValue: number;
}): number[];
/**
 * Zeros a number array; mutates input
 * @param array {number[]}
 */
declare function zeroNumberArray(array: any): void;
/**
 * Zeros a string array; mutates input
 * @param array {string[]}
 */
declare function zeroStringArray(array: any): void;
/**
 * Resets an array to an array of undefined; mutates array
 * @param array {*[]}
 */
declare function resetArray(array: any): void;
/**
 * @param {Object} options - The options object.
 * @param options.length {number}
 * @param options.minValue {number}
 * @param options.maxValue {number}
 * @returns {number[]}
 */
declare function randomArray({ length, minValue, maxValue }?: {
    length: number;
    minValue: number;
    maxValue: number;
}): number[];
/**
 *
 * @param {Object} options - The options object.
 * @param options.rows {number} default: 3
 * @param options.columns {number} default: 3
 * @param options.minValue {number} default 0
 * @param options.maxValue {number} default 10
 * @returns {number[][]}
 */
declare function randomMatrix({ rows, columns, minValue, maxValue }?: {
    rows: number;
    columns: number;
    minValue: number;
    maxValue: number;
}): number[][];
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
declare function sortedArray(n?: number): number[];
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
declare function reverseSortedArray(n?: number): number[];
/**
 *
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
declare function rotateLeft({ array, rotateBy }?: {
    array: number[];
    rotateBy: number;
}): number[];
/**
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
declare function rotateRight({ array, rotateBy }?: {
    array: number[];
    rotateBy: number;
}): number[];
/**
 * @param {Object} options - The options object.
 * @param {*[]} options.array
 * @returns {*[]}
 */
declare function median({ array }?: {
    array: any[];
}): any[];
/**
 * Converts an array to a string representation.
 *
 * @param {Object} [options] - The options object.
 * @param {Array} [options.array=[]] - The array to convert.
 * @param {string} [options.separator=','] - The separator to use between array elements.
 * @returns {string} The string representation of the array.
 */
declare function arrayToString({ array }?: {
    array: any[];
}, { separator }?: {
    separator: string;
}): any;
/**
 * Checks if the given value is an array.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} - Returns `true` if the value is an array, else `false`.
 */
declare function isArray(obj: any): obj is any[];
/**
 * Checks if an object is array-like.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns `true` if the object is array-like, `false` otherwise.
 */
declare function isArraylike(obj: any): boolean;
/**
 * intersperse puts given withit after each item in list except the last one
 * @param {*[]} list an array of anytype of items
 * @param {*} withit anything that you need to be interspersed in the given list
 * @returns {*[]}
 */
declare function intersperse(list: any, withit: any): any;
/**
 * arrayMayGet may get a value or fetch an error if index is out of bounds.
 * @param {Array<T>} array
 * @param {number} index
 * @returns {Result2<T, string}}
 */
declare function arrayMayGet<T>(array: Array<T>, index: number): Result2<T, string>;
export { arrayToString, defaultArray, intersperse, isArray, isArraylike, randomArray, randomMatrix, resetArray, reverseSortedArray, rotateLeft, rotateRight, sortedArray, zeroNumberArray, zeroStringArray, median, arrayMayGet, };
