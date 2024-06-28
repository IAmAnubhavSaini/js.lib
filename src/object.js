/**
 *
 * @param obj {Object}
 * @returns {string}
 */
function objectToString(obj) {
    if(obj === null || obj === undefined) {
        return "[]";
    }
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let out = "";
    for (let i = 0; i < keys.length; i += 1) {
        out += "[" + keys[i] + ":";
        if (Array.isArray(values[i]) || typeof values[i] === 'object') {
            out += objectToString(values[i]);
        } else {
            out += values[i];
        }
        out += "]";
    }
    return out;
}

module.exports = {
    objectToString
};
