/**
 * The default base64 character set
 */
const BASE_64_DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * The URL safe base64 character set
 * */
const URL_SAFE_BASE_64_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

/**
 * The default base64 padding character
 */
const BASE_64_DEFAULT_PAD = "=";

/**
 * The URL safe base64 padding character
 * */
const URL_SAFE_BASE_64_PAD = "=";

/**
 * The length of the token processed at a time
 * */
const TOKEN_LENGTH = 3;

/**
 * Tokenize a string based on the given token length
 * @param {string} str - The string to tokenize
 * @param {number} count - The number of characters in each token
 * @returns {string[]} - The string tokens in an array
 * @example
 * const tokens = tokenize('Hello World', 3)
 * console.log(tokens) // ['Hel', 'lo ', 'Wor', 'ld']
 * */
function tokenize(str, count = TOKEN_LENGTH) {
    if (str.length === 0 || count === 0) {
        return [];
    }
    const length = str.length;
    const out = [];
    for (let i = 0; i < length; i += count) {
        out.push(str.substring(i, i + count));
    }
    return out;
}

function codePointFromBinaryString(binary) {
    return parseInt(binary.padStart(8, "0"), 2);
}

/**
 * Encodes a string to base64
 * @param {string} input - The string to encode
 * @returns {string} - The base64 encoded string
 * @example
 * const encode = require('encode')
 * const encoded = encode('Hello World')
 * console.log(encoded) // SGVsbG8gV29ybGQ=
 * */
function encode(input /* string */, alphabet = BASE_64_DEFAULT_ALPHABET, pad = BASE_64_DEFAULT_PAD) {
    const encoded = tokenize(input, TOKEN_LENGTH) // create an array of 3-letter words
        .map((i) => i.split("")) // create an array of single items
        .map((i) => i.map((k) => k.charCodeAt(0))) // map each letter to it's char code
        .map((i) => i.map((k) => k.toString(2))) // map each char code to binary value
        .map((i) => i.map((k) => k.padStart(8, "0"))) // JS removes leading 0, add them back to the left
        .map((i) => i.join("")) // make 8*3 = 24 bit long string
        .map((i) => tokenize(i, 6)) // make 24/6 = 4 bit strings
        .map((i) => i.map((k) => k.padEnd(6, "0"))) // pad 0 to the end of string
        .map((i) => i.map((binaryString) => codePointFromBinaryString(binaryString)))
        .map((i) => i.map((charCode) => BASE_64_DEFAULT_ALPHABET[charCode]))
        .map((i) => i.join("")) // join to make 3-letter words
        .join(""); // join to make string

    const diff = TOKEN_LENGTH - (input.length % TOKEN_LENGTH); // characters required to make string mod 3 whole
    const requiredPadding = diff === TOKEN_LENGTH ? 0 : diff; // padding is required only when the string length is not proper mod 3
    const padded = encoded + "".padEnd(requiredPadding, pad); // pad as many = as are required to make string length mod 3
    return padded;
}

/**
 * Decodes a base64 encoded string
 * @param {string} base64 - The base64 encoded string
 * @returns {string} - The decoded string
 * @example
 * const decoded = decode('SGVsbG8gV29ybGQ=')
 * console.log(decoded) // Hello World
 * */
function decode (base64 /* string */, alphabet = BASE_64_DEFAULT_ALPHABET, pad = BASE_64_DEFAULT_PAD) {
  return base64
    .replace(new RegExp(`${pad}`, "g"), '') // remove padded =
    .split('') // array of letters
    .map(c => alphabet.indexOf(c)) // get the index of each letter in the base64 alphabet
    .map(n => n.toString(2).padStart(6, '0'))
    .join('') // put all the 6bit binary numbers together
    .split() // this puts the string in [] so that we can map over it
    .map(i => tokenize(i, 8)) // create 8bit binary numbers
    .pop() // this brings the mapped content one level up // reverses split() above
    .filter(i => i.length === 8) // remove the padded binary number which is incomplete
    .map(i => parseInt(i, 2)) // get the number out of 8bit binary
    .map(i => String.fromCharCode(i)) // convert to ASCII
    .join('') // convert to string
}


module.exports = {
    BASE_64_DEFAULT_ALPHABET,
    BASE_64_DEFAULT_PAD,
    TOKEN_LENGTH,
    codePointFromBinaryString,
    decode,
    encode,
    tokenize,
    URL_SAFE_BASE_64_ALPHABET,
};
