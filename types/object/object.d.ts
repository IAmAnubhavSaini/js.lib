/**
 * objectToString - Convert an object to its string representation
 * @param {Object} obj - The object to convert
 * @returns {string} - The string representation of the object
 */
export function objectToString(obj: any): string;
/**
 * deepEqual - Compare two objects for equality by comparing their string representations
 * @param {Object} a - The first object
 * @param {Object} b - The second object
 * @returns {boolean} - True if the objects are equal, false otherwise
 */
export function deepEqual(a: any, b: any): boolean;
/**
 * keyEqual - Compare two objects for equality by comparing their keys
 * @param {Object} a - The first object
 * @param {Object} b - The second object
 * @returns {boolean} - True if the objects have the same keys, false otherwise
 */
export function keyEqual(a: any, b: any): boolean;
/**
 * valueEqual - Compare two objects for equality by comparing their values
 * @param {Object} a - The first object
 * @param {Object} b - The second object
 * @returns {boolean} - True if the objects have the same values, false otherwise
 * @note This function is not very useful, as it depends upon the ordering of values in the object to be the same. This is not guaranteed in JavaScript. I guess.
 */
export function valueEqual(a: any, b: any): boolean;
/**
 * findKeys - Find all keys, even nested, for a given value
 * @param {Object} options - The options for finding keys
 * @param {Object} options.obj - The object to search
 * @param {*} options.value - The value to find
 * @param {string} [options.separator='.'] - The separator to use for nested keys
 * @param {string[]} [options.keys=[]] - The array to store the keys
 * @param {number} [options.depth=9] - The maximum depth to search
 * @returns {string[]} - An array of keys that match the given value
 */
export function findKeys(options: {
    obj: any;
    value: any;
    separator?: string;
    keys?: string[];
    depth?: number;
}): string[];
export namespace validations {
    function isObject(obj: any): boolean;
    function isCircular(obj: any): boolean;
}
