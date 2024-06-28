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
};
