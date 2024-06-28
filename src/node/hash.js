const { fromAscii: hexFromAscii } = require("../string/fns/hex");

/**
 * hash256 - Generate a hash from a string; if crypto module is not available, will return a weird base64
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {string} - The hash
 */
function hash256({ content } = { content: "" }) {
    let crypto = null;
    try {
        // If crypto is not availble, require will throw an error
        crypto = require("crypto");
        const buffer = crypto.createHash("sha256").update(content).digest();
        return buffer.toString("hex");
    } catch (e) {
        console.error("crypto is not available in your current environment");
        const base64 = require("../string/fns/base64.js");
        return hexFromAscii(base64.encode(content).slice(0, 256 / 4)).padEnd(64, "f");
    }
}

module.exports = {
    hash256,
};
