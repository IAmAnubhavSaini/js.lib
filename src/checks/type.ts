function isString(value: unknown) {
    return typeof value === "string" && Object.hasOwn(value as Object, "length");
}

function isEmptyOrNullString(value: string) {
    return value === null || (isString(value) && value.length === 0);
}

function isEmptyString(value: string) {
    return isString(value) && value.length === 0;
}

function isUndefinedOrNull(value: unknown) {
    return value === undefined || value === null;
}

/**
 * isPrimitive checks if the given value is of primitive type
 * Primitive types are immutable, meaning their values cannot be changed.
 * @param value {unknown}
 * @returns boolean
 */
function isPrimitive(value: unknown) {
    return value === null || ["number", "string", "symbol", "boolean", "bigint", "undefined"].includes(typeof value);
}

/**
 * Checks if the given array contains elements of a specific type.
 *
 * @param {string} type - The type to check against (e.g., 'number', 'string').
 * @param {Array<unknown>} array - The array to inspect.
 * @returns boolean Whether all elements in the array are of the specified type.
 */
function isArrayOf(type: string, array: Array<unknown>) {
    return Array.isArray(array) && array.reduce((t, current) => t && typeof current === type, true);
}

export { isString, isEmptyString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf };
