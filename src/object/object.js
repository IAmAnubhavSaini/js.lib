/**
 * objectToString - Convert an object to its string representation
 * @param {Object} obj - The object to convert
 * @returns {string} - The string representation of the object
 */
function objectToString(obj) {
    if (obj === null || obj === undefined) {
        return "[]";
    }

    function innerObjectToString(obj, visited, parentKey) {
        if (visited.has(obj)) {
            return `[Circular(${parentKey})]`;
        }
        visited.add(obj);
        const keys = Object.keys(obj);
        const values = Object.values(obj);
        let out = "";
        for (let i = 0; i < keys.length; i += 1) {
            out += `[${keys[i]}:`;
            if (Array.isArray(values[i]) || typeof values[i] === "object") {
                out += innerObjectToString(values[i], visited, keys[i]);
            } else {
                out += values[i];
            }
            out += "]";
        }
        visited.delete(obj);
        return out;
    }

    return innerObjectToString(obj, new WeakSet(), "");
}

/**
 * deepEqual - Compare two objects for equality by comparing their string representations
 * @param {Object} a - The first object
 * @param {Object} b - The second object
 * @returns {boolean} - True if the objects are equal, false otherwise
 */
function deepEqual(a, b) {
    return objectToString(a) === objectToString(b);
}

/**
 * keyEqual - Compare two objects for equality by comparing their keys
 * @param {Object} a - The first object
 * @param {Object} b - The second object
 * @returns {boolean} - True if the objects have the same keys, false otherwise
 */
function keyEqual(a, b) {
    return objectToString(Object.keys(a)) === objectToString(Object.keys(b));
}

/**
 * valueEqual - Compare two objects for equality by comparing their values
 * @param {Object} a - The first object
 * @param {Object} b - The second object
 * @returns {boolean} - True if the objects have the same values, false otherwise
 * @note This function is not very useful, as it depends upon the ordering of values in the object to be the same. This is not guaranteed in JavaScript. I guess.
 */
function valueEqual(a, b) {
    return objectToString(Object.values(a)) === objectToString(Object.values(b));
}

/**
 * findKeys - Find all keys, even nested, for a given value
 * @param {Object} options - The options for finding keys
 * @param {Object} options.obj - The object to search
 * @param {*} options.value - The value to find
 * @param {string} [options.separator='.'] - The separator to use for nested keys
 * @param {string[]} [options.keys=[]] - The array to store the keys
 * @param {number} [options.depth=9] - The maximum depth to search
 * @returns {string[]} - An array of keys that match the given value
 */
function findKeys(options) {
    const { obj, value, separator = ".", keys = [], depth = 9 } = options;

    function innerFind(obj, value, separator, keys, depth, path = []) {
        if (depth === 0) {
            return keys;
        }

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const pathSoFar = path.concat(key);
                if (obj[key] === value) {
                    keys.push(pathSoFar.join(separator));
                }
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    innerFind(obj[key], value, separator, keys, depth - 1, pathSoFar);
                }
            }
        }

        return keys;
    }

    return innerFind(obj, value, separator, keys, depth);
}

const validations = {
    isObject(obj) {
        return obj !== null && typeof obj === "object";
    },
    isCircular(obj) {
        return objectToString(obj).includes("[Circular");
    },
};

module.exports = {
    objectToString,
    deepEqual,
    keyEqual,
    valueEqual,
    findKeys,
    validations,
};
