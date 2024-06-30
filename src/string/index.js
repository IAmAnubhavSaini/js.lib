const {
    BASE_64_DEFAULT_ALPHABET,
    BASE_64_DEFAULT_PAD,
    codePointFromBinaryString,
    decode,
    encode,
    tokenize,
    URL_SAFE_BASE_64_ALPHABET,
} = require("./fns/base64");

const { fromAscii } = require("./fns/hex");
const { fromHex } = require("./fns/ascii");

/**
 * deleteChar deletes first instance of given character from a string
 * @param {Object} options - The options object.
 * @param {string} options.str - The string to delete from.
 * @param {string} options.char - The character to delete.
 * @returns {string}
 */
function deleteChar({ str, char } = { str: "", char: "" }) {
    return str.replace(char, "");
}

module.exports = {
    base64: {
        BASE_64_DEFAULT_ALPHABET,
        BASE_64_DEFAULT_PAD,
        codePointFromBinaryString,
        decode,
        encode,
        tokenize,
        URL_SAFE_BASE_64_ALPHABET,
    },
    hex: {
        fromAscii,
    },
    ascii: {
        fromHex,
    },

    deleteChar,
};
