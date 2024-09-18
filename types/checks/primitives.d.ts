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
export { isString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive };
