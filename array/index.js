const {
    filterReduce, foldl, foldr, take, tail, head,
} = require('./fns/list.js');

/**
 *
 * @param length {number}
 * @param defaultValue {*}
 * @returns {*[]}
 */
function defaultArray({length, defaultValue} = {length: 10, defaultValue: 0}) {
    return Array.from({length}, _ => defaultValue);
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
 *
 * @param length {number}
 * @param minValue {number}
 * @param maxValue {number}
 * @returns {number[]}
 */
function randomArray({length, minValue, maxValue} = {length: 10, minValue: 0, maxValue: 10}) {
    if (maxValue < minValue) {
        return randomArray({length: length, minValue: maxValue, maxValue: minValue});
    }
    return Array.from({length}, _ => Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
}

/**
 *
 * @param rows {number} default: 3
 * @param columns {number} default: 3
 * @param minValue {number} default 0
 * @param maxValue {number} default 10
 * @returns {number[][]}
 */
function randomMatrix({rows, columns, minValue, maxValue} = {rows: 3, columns: 3, minValue: 0, maxValue: 10}) {
    if (maxValue > minValue) {
        return randomMatrix({rows, columns, minValue: maxValue, maxValue: minValue});
    }
    return Array.from({length: rows}, _ => randomArray({length: columns, minValue, maxValue}));
}

/**
 *
 * @param n {number}
 * @returns {number[]}
 */
function sortedArray(n = 10) {
    return Array(n).fill(0).map((_, i) => i + 1);
}

/**
 *
 * @param n {number}
 * @returns {number[]}
 */
function reverseSortedArray(n = 10) {
    return sortedArray(n).reverse();
}

module.exports = {
    list: {
        filterReduce, foldl, foldr, take, tail, head,
    },
    randomArray,
    randomMatrix,
    defaultArray,
    zeroNumberArray,
    zeroStringArray,
    resetArray,
    sortedArray,
    reverseSortedArray
};
