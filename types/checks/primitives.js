"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
exports.isEmptyOrNullString = isEmptyOrNullString;
exports.isUndefinedOrNull = isUndefinedOrNull;
exports.isPrimitive = isPrimitive;
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
