"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMayGet = arrayMayGet;
exports.arrayToString = arrayToString;
exports.chunk = chunk;
exports.defaultArray = defaultArray;
exports.filterIn = filterIn;
exports.filterInStream = filterInStream;
exports.filterOut = filterOut;
exports.filterOutStream = filterOutStream;
exports.inplaceFilterIn = inplaceFilterIn;
exports.inplaceFilterOut = inplaceFilterOut;
exports.intersperse = intersperse;
exports.isArray = isArray;
exports.isArraylike = isArraylike;
exports.median = median;
exports.randomArray = randomArray;
exports.randomMatrix = randomMatrix;
exports.resetArray = resetArray;
exports.reverseSortedArray = reverseSortedArray;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.sortedArray = sortedArray;
exports.zeroNumberArray = zeroNumberArray;
exports.zeroStringArray = zeroStringArray;
/**
 *
 * @param {Object} options - The options object.
 * @param {number} options.length - The length of the array.
 * @param {*} options.defaultValue - The default value of the array.
 * @returns {*[]}
 */
function defaultArray({ length, defaultValue } = { length: 10, defaultValue: 0 }) {
    return Array.from({ length }, (_) => defaultValue);
}
/**
 * Zeros a number array; mutates input
 * @param array {number[]}
 */
function zeroNumberArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = 0;
    }
}
/**
 * Zeros a string array; mutates input
 * @param array {string[]}
 */
function zeroStringArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = "";
    }
}
/**
 * Resets an array to an array of undefined; mutates array
 * @param array {*[]}
 */
function resetArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = undefined;
    }
}
/**
 * @param {Object} options - The options object.
 * @param options.length {number}
 * @param options.minValue {number}
 * @param options.maxValue {number}
 * @returns {number[]}
 */
function randomArray({ length, minValue, maxValue } = { length: 10, minValue: 0, maxValue: 10 }) {
    if (maxValue < minValue) {
        return randomArray({ length: length, minValue: maxValue, maxValue: minValue });
    }
    return Array.from({ length }, (_) => Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
}
/**
 *
 * @param {Object} options - The options object.
 * @param options.rows {number} default: 3
 * @param options.columns {number} default: 3
 * @param options.minValue {number} default 0
 * @param options.maxValue {number} default 10
 * @returns {number[][]}
 */
function randomMatrix({ rows, columns, minValue, maxValue } = { rows: 3, columns: 3, minValue: 0, maxValue: 10 }) {
    if (maxValue > minValue) {
        return randomMatrix({ rows, columns, minValue: maxValue, maxValue: minValue });
    }
    return Array.from({ length: rows }, (_) => randomArray({ length: columns, minValue, maxValue }));
}
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
function sortedArray(n = 10) {
    return Array(n)
        .fill(0)
        .map((_, i) => i + 1);
}
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
function reverseSortedArray(n = 10) {
    return sortedArray(n).reverse();
}
/**
 *
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
function rotateLeft({ array, rotateBy } = { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rotateBy: 3 }) {
    rotateBy = rotateBy % array.length;
    return [...array.slice(rotateBy), ...array.slice(0, rotateBy)];
}
/**
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
function rotateRight({ array, rotateBy } = { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rotateBy: 3 }) {
    rotateBy = rotateBy % array.length;
    return [...array.slice(array.length - rotateBy), ...array.slice(0, array.length - rotateBy)];
}
/**
 * @param {Object} options - The options object.
 * @param {*[]} options.array
 * @returns {*[]}
 */
function median({ array } = { array: [] }) {
    if (!Array.isArray(array)) {
        return [];
    }
    const length = array.length;
    if (length < 1) {
        return [];
    }
    if (length < 2) {
        return [...array];
    }
    const hasOddLength = length % 2 === 1;
    if (hasOddLength) {
        return [array[Math.floor(length / 2)]];
    }
    else {
        return [array[Math.floor(length / 2) - 1], array[Math.floor(length / 2)]];
    }
}
/**
 * Converts an array to a string representation.
 *
 * @param {Object} [options] - The options object.
 * @param {Array} [options.array=[]] - The array to convert.
 * @param {string} [options.separator=','] - The separator to use between array elements.
 * @returns {string} The string representation of the array.
 */
function arrayToString({ array } = { array: [] }, { separator } = { separator: "," }) {
    array = Array.isArray(array) ? array : [];
    separator = typeof separator === "string" ? separator : ",";
    function innerArrayToString(value, seen, path = "") {
        if (typeof value === "object" && seen[value]) {
            return `Circular(${seen[value]})`;
        }
        seen[value] = path;
        if (Array.isArray(value)) {
            return `[${value.map((v, i) => innerArrayToString(v, seen, path + "[" + i + "]")).join(separator)}]`;
        }
        return value;
    }
    const set = new WeakSet();
    set.add(array);
    const value = innerArrayToString(array, set, "_");
    set.delete(array);
    return value;
}
/**
 * Checks if the given value is an array.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} - Returns `true` if the value is an array, else `false`.
 */
function isArray(obj) {
    return Array.isArray(obj);
}
/**
 * Checks if an object is array-like.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns `true` if the object is array-like, `false` otherwise.
 */
function isArraylike(obj) {
    return typeof obj === "object" && obj !== null && typeof obj.length === "number";
}
/**
 * intersperse puts given withit after each item in list except the last one
 * @param {*[]} list an array of anytype of items
 * @param {*} withit anything that you need to be interspersed in the given list
 * @returns {*[]}
 */
function intersperse(list, withit) {
    if (list.length <= 1) {
        return list;
    }
    const out = [list[0]];
    for (let i = 1; i < list.length; i += 1) {
        out.push(withit);
        out.push(list[i]);
    }
    return out;
}
/**
 * arrayMayGet may get a value or fetch an error if index is out of bounds.
 * @param {Array<T>} array
 * @param {number} index
 * @returns {Result2<T, string}}
 */
function arrayMayGet(array, index) {
    if (index >= 0 && index < array.length) {
        return { ok: true, result: [array[index]] };
    }
    else {
        return { ok: false, errors: ["ERROR: index out of range."] };
    }
}
/**
 * filterOut filters out items from an array when the predicate is true
 * @param array {T[]}
 * @param predicate {(item: T) => boolean}
 * @returns {T[]}
 */
function filterOut(array, predicate) {
    return array.filter((item) => !predicate(item));
}
/**
 * filterIn filters in (OR keeps) items from an array when the predicate is true
 * @param array {T[]}
 * @param predicate {(item: T) => boolean}
 * @returns {T[]}
 */
function filterIn(array, predicate) {
    return array.filter((item) => predicate(item));
}
/**
 * inplaceFilterOut in place filters out items from an array when the predicate is true
 * @param array {T[]}
 * @param predicate {(item: T) => boolean}
 * @returns {T[]}
 */
function inplaceFilterOut(array, predicate) {
    let i = 0;
    let j = 0;
    let len = array.length;
    while (i < len) {
        if (!predicate(array[i])) {
            array[j] = array[i];
            j++;
        }
        i++;
    }
    array.length = j;
    return array;
}
/**
 * inplaceFilterIn in place filters in (OR keeps) items from an array when the predicate is true
 * @param array {T[]}
 * @param predicate {(item: T) => boolean}
 * @returns {T[]}
 */
function inplaceFilterIn(array, predicate) {
    let i = 0;
    let j = 0;
    let len = array.length;
    while (i < len) {
        if (predicate(array[i])) {
            array[j] = array[i];
            j++;
        }
        i++;
    }
    array.length = j;
    return array;
}
async function chunk(array, size) {
    return new Promise((resolve, reject) => {
        try {
            if (!Number.isInteger(size)) {
                return reject(new Error("Size is not an integer"));
            }
            if (size < 0) {
                return reject(new Error("Size is negative"));
            }
            if (!array) {
                return reject(new Error("Array is null or undefined"));
            }
            const len = array.length;
            if (len < 0) {
                return reject(new Error("Array length is negative"));
            }
            if (!len) {
                return resolve([]);
            }
            if (size < 1) {
                return resolve(array.map(_ => []));
            }
            if (size >= len) {
                return resolve([array]);
            }
            if (!Array.isArray(array)) {
                return reject(new Error("Input is not an array"));
            }
            const result = [];
            for (let i = 0; i < len; i += size) {
                result.push(array.slice(i, i + size));
            }
            return resolve(result);
        }
        catch (error) {
            return reject(error);
        }
    });
}
function* filterOutStream(array, predicate) {
    for (const item of array) {
        if (!predicate(item)) {
            yield item;
        }
    }
}
function* filterInStream(array, predicate) {
    for (const item of array) {
        if (predicate(item)) {
            yield item;
        }
    }
}
