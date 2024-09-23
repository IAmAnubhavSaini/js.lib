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
function detectCircularity(obj: any, seenObjects: WeakSet<object> = new WeakSet()): boolean {
    if (typeof obj !== "object" || obj === null) {
        return false;
    }

    if (seenObjects.has(obj)) {
        return true;
    }

    seenObjects.add(obj);

    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            if (detectCircularity(obj[key], seenObjects)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Converts a JSON object to CSV format.
 * @param {JsonObject} json - The JSON object to convert to CSV.
 * @param {string} joiner - The string used to join values in the CSV (default is ",").
 * @returns {string} - The CSV representation of the JSON object.
 */
function jsonToCsv(json: JsonObject, joiner = ","): string {
    const rows: string[] = [];
    const headers: string[] = Object.keys(json);

    rows.push(headers.join(joiner));

    const values: string[] = headers.map((header) => {
        const value = json[header];
        return typeof value === "object" ? JSON.stringify(value) : String(value);
    });

    rows.push(values.join(","));

    return rows.join("\n");
}

/**
 * Validates a JSON string and converts it to CSV format.
 * @param {string} jsonString - The JSON string to validate and convert.
 * @returns {string | null} - The CSV representation of the JSON object, or null if the input is invalid or contains circular references.
 */
function validateJsonAndConvertToCsv(jsonString: string): string | null {
    try {
        const jsonObject = JSON.parse(jsonString);

        if (detectCircularity(jsonObject)) {
            console.error("Circular reference detected in the JSON object.");
            return null;
        }

        if (typeof jsonObject === "object" && jsonObject !== null) {
            return jsonToCsv(jsonObject, ",");
        } else {
            console.error("Invalid JSON object.");
            return null;
        }
    } catch (e) {
        return null;
    }
}

export { detectCircularity, jsonToCsv, validateJsonAndConvertToCsv };
