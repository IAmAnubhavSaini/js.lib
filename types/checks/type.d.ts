declare function isString(value: unknown): boolean;
declare function isEmptyOrNullString(value: string): boolean;
declare function isUndefinedOrNull(value: unknown): boolean;
/**
 * isPrimitive checks if the given value is of primitive type
 * Primitive types are immutable, meaning their values cannot be changed.
 * @param value {unknown}
 * @returns boolean
 */
declare function isPrimitive(value: unknown): boolean;
/**
 * Checks if the given array contains elements of a specific type.
 *
 * @param {string} type - The type to check against (e.g., 'number', 'string').
 * @param {Array<unknown>} array - The array to inspect.
 * @returns boolean Whether all elements in the array are of the specified type.
 */
declare function isArrayOf(type: string, array: Array<unknown>): unknown;
export { isString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf };
