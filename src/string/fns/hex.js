/**
 * fromAscii converts ascii input string to hexadecimal representation
 * @param {string} input - input string
 * @return {string} - hexadecimal representation of input string
 */
function fromAscii(input) {
    let hex = "";
    for (let i = 0; i < input.length; i++) {
        hex += input.charCodeAt(i).toString(16);
    }
    return hex;
}

/**
 * verifyHex checks if input is a valid hexadecimal string
 * @param {string} input - input string
 * @return {boolean} - true if input is a valid hexadecimal string, false otherwise
 */
function verifyHex(input) {
    return /^[0-9a-fA-F]+$/.test(input);
}

module.exports = {
    fromAscii,
    verifyHex,
};
