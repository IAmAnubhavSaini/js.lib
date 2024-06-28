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
import { filterReduce } from "./fns/list.js";
import { foldl } from "./fns/list.js";
import { foldr } from "./fns/list.js";
import { take } from "./fns/list.js";
import { tail } from "./fns/list.js";
import { head } from "./fns/list.js";
/**
 * @param {Object} options - The options object.
 * @param {*[]} options.array
 * @returns {*[]}
 */
export function median({ array }?: {
    array: any[];
}): any[];
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
export declare namespace list {
    export { filterReduce };
    export { foldl };
    export { foldr };
    export { take };
    export { tail };
    export { head };
}
