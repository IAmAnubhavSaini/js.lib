"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
exports.isEmptyOrNullString = isEmptyOrNullString;
exports.isUndefinedOrNull = isUndefinedOrNull;
exports.isPrimitive = isPrimitive;
exports.isArrayOf = isArrayOf;
function isString(value) {
    return typeof value === "string" && Object.hasOwn(value, "length");
}
function isEmptyOrNullString(value) {
    return value === null || (isString(value) && value.length === 0);
}
function isUndefinedOrNull(value) {
    return value === undefined || value === null;
}
/**
 * isPrimitive checks if the given value is of primitive type
 * Primitive types are immutable, meaning their values cannot be changed.
 * @param value {unknown}
 * @returns boolean
 */
function isPrimitive(value) {
    return value === null || ["number", "string", "symbol", "boolean", "bigint", "undefined"].includes(typeof value);
}
/**
 * Checks if the given array contains elements of a specific type.
 *
 * @param {string} type - The type to check against (e.g., 'number', 'string').
 * @param {Array<unknown>} array - The array to inspect.
 * @returns boolean Whether all elements in the array are of the specified type.
 */
function isArrayOf(type, array) {
    return Array.isArray(array) && array.reduce((t, current) => t && typeof current === type, true);
}
