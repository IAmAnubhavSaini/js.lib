type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface JsonObject {
    [key: string]: JsonValue;
}
/**
 * Recursively checks if an object contains circular references.
 * @param obj - The object to check for circular references.
 * @param seenObjects - A WeakSet that keeps track of objects already visited (default is a new WeakSet).
 * @returns {boolean} - True if there are circular references, false otherwise.
 */
declare function detectCircularity(obj: any, seenObjects?: WeakSet<object>): boolean;
/**
 * Converts a JSON object to CSV format.
 * @param {JsonObject} json - The JSON object to convert to CSV.
 * @param {string} joiner - The string used to join values in the CSV (default is ",").
 * @returns {string} - The CSV representation of the JSON object.
 */
declare function jsonToCsv(json: JsonObject, joiner?: string): string;
/**
 * Validates a JSON string and converts it to CSV format.
 * @param {string} jsonString - The JSON string to validate and convert.
 * @returns {string | null} - The CSV representation of the JSON object, or null if the input is invalid or contains circular references.
 */
declare function validateJsonAndConvertToCsv(jsonString: string): string | null;
declare function csvToJson(csv: string): JsonObject[];
export { detectCircularity, jsonToCsv, validateJsonAndConvertToCsv, csvToJson };
