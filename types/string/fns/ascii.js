"use strict";
/**
 * fromHex - Convert a hex string to an ASCII string
 * @param {string} hex - The hex string to convert
 * @return {string} - The ASCII string
 */
function fromHex(hex) {
    let ascii = "";
    for (let i = 0; i < hex.length; i += 2) {
        ascii += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
    }
    return ascii;
}
/**
 * verifyAscii - Check if a string is a valid ASCII string
 * @param {string} ascii - The ASCII string to verify
 * @return {boolean} - True if the string is a valid ASCII string, false otherwise
 */
function verifyAscii(ascii) {
    return /^[\x00-\x7F]*$/.test(ascii);
}
module.exports = {
    fromHex,
    verifyAscii,
};
