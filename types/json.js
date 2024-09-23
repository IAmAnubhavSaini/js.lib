"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectCircularity = detectCircularity;
exports.jsonToCsv = jsonToCsv;
exports.validateJsonAndConvertToCsv = validateJsonAndConvertToCsv;
exports.csvToJson = csvToJson;
/**
 * Recursively checks if an object contains circular references.
 * @param obj - The object to check for circular references.
 * @param seenObjects - A WeakSet that keeps track of objects already visited (default is a new WeakSet).
 * @returns {boolean} - True if there are circular references, false otherwise.
 */
function detectCircularity(obj, seenObjects = new WeakSet()) {
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
function jsonToCsv(json, joiner = ",") {
    const rows = [];
    const headers = Object.keys(json);
    rows.push(headers.join(joiner));
    const values = headers.map((header) => {
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
function validateJsonAndConvertToCsv(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);
        if (detectCircularity(jsonObject)) {
            console.error("Circular reference detected in the JSON object.");
            return null;
        }
        if (typeof jsonObject === "object" && jsonObject !== null) {
            return jsonToCsv(jsonObject, ",");
        }
        else {
            console.error("Invalid JSON object.");
            return null;
        }
    }
    catch (e) {
        return null;
    }
}
function csvToJson(csv) {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",").map((header) => header.trim());
    const jsonArray = lines.slice(1).reduce((acc, line) => {
        const values = [];
        let current = "";
        let insideQuotes = false;
        for (const char of line) {
            if (char === '"' && (current.length === 0 || current[current.length - 1] !== "\\")) {
                insideQuotes = !insideQuotes; // Toggle the insideQuotes flag
            }
            else if (char === "," && !insideQuotes) {
                values.push(current.trim());
                current = ""; // Reset for the next value
            }
            else {
                current += char; // Accumulate characters
            }
        }
        // Push the last value
        values.push(current.trim());
        // Only process lines that have the same number of values as headers
        if (values.length === headers.length) {
            const jsonObject = {};
            headers.forEach((header, index) => {
                jsonObject[header] = values[index];
            });
            acc.push(jsonObject);
        }
        return acc;
    }, []);
    return jsonArray;
}
