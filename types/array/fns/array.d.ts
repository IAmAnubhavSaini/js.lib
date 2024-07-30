/**
 * Converts an array to a string representation.
 *
 * @param {Object} [options] - The options object.
 * @param {Array} [options.array=[]] - The array to convert.
 * @param {string} [options.separator=','] - The separator to use between array elements.
 * @returns {string} The string representation of the array.
 */
export function arrayToString({ array }?: {
    array?: any[];
    separator?: string;
}, { separator }?: {
    separator: string;
}): string;
/**
 *
 * @param {Object} options - The options object.
 * @param {number} options.length - The length of the array.
 * @param {*} options.defaultValue - The default value of the array.
 * @returns {*[]}
 */
export function defaultArray({ length, defaultValue }?: {
    length: number;
    defaultValue: any;
}): any[];
/**
 * intersperse puts given withit after each item in list except the last one
 * @param {*[]} list an array of anytype of items
 * @param {*} withit anything that you need to be interspersed in the given list
 * @returns {*[]}
 */
export function intersperse(list: any[], withit: any): any[];
/**
 * Checks if the given value is an array.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} - Returns `true` if the value is an array, else `false`.
 */
export function isArray(obj: any): boolean;
/**
 * Checks if an object is array-like.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns `true` if the object is array-like, `false` otherwise.
 */
export function isArraylike(obj: any): boolean;
/**
 * @param {Object} options - The options object.
 * @param options.length {number}
 * @param options.minValue {number}
 * @param options.maxValue {number}
 * @returns {number[]}
 */
export function randomArray({ length, minValue, maxValue }?: {
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
export function randomMatrix({ rows, columns, minValue, maxValue }?: {
    rows: number;
    columns: number;
    minValue: number;
    maxValue: number;
}): number[][];
/**
 * Resets an array to an array of undefined; mutates array
 * @param array {*[]}
 */
export function resetArray(array: any[]): void;
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
export function reverseSortedArray(n?: number): number[];
/**
 *
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
export function rotateLeft({ array, rotateBy }?: {
    array: any[];
    rotateBy: number;
}): any[];
/**
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
export function rotateRight({ array, rotateBy }?: {
    array: any[];
    rotateBy: number;
}): any[];
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
export function sortedArray(n?: number): number[];
/**
 * Zeros a number array; mutates input
 * @param array {number[]}
 */
export function zeroNumberArray(array: number[]): void;
/**
 * Zeros a string array; mutates input
 * @param array {string[]}
 */
export function zeroStringArray(array: string[]): void;
/**
 * @param {Object} options - The options object.
 * @param {*[]} options.array
 * @returns {*[]}
 */
export function median({ array }?: {
    array: any[];
}): any[];
