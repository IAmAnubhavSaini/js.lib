const { fromAscii: hexFromAscii } = require("../string/fns/hex");
const { createHash } = require("crypto");

/**
 * hash256 - Generate a hash from a string; if crypto module is not available, will return a weird base64
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {string} - The hash
 */
function hash256({ content } = { content: "" }) {
    return createHash("sha256").update(content).digest().toString("hex");
}

module.exports = {
    hash256,
};
