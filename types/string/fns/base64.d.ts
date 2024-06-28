/**
 * The default base64 character set
 */
export const BASE_64_DEFAULT_ALPHABET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
/**
 * The default base64 padding character
 */
export const BASE_64_DEFAULT_PAD: "=";
/**
 * The length of the token processed at a time
 * */
export const TOKEN_LENGTH: 3;
export function codePointFromBinaryString(binary: any): number;
/**
 * Decodes a base64 encoded string
 * @param {string} base64 - The base64 encoded string
 * @returns {string} - The decoded string
 * @example
 * const decoded = decode('SGVsbG8gV29ybGQ=')
 * console.log(decoded) // Hello World
 * */
export function decode(base64: string, alphabet?: string, pad?: string): string;
/**
 * Encodes a string to base64
 * @param {string} input - The string to encode
 * @returns {string} - The base64 encoded string
 * @example
 * const encode = require('encode')
 * const encoded = encode('Hello World')
 * console.log(encoded) // SGVsbG8gV29ybGQ=
 * */
export function encode(input: string, alphabet?: string, pad?: string): string;
/**
 * Tokenize a string based on the given token length
 * @param {string} str - The string to tokenize
 * @param {number} count - The number of characters in each token
 * @returns {string[]} - The string tokens in an array
 * @example
 * const tokens = tokenize('Hello World', 3)
 * console.log(tokens) // ['Hel', 'lo ', 'Wor', 'ld']
 * */
export function tokenize(str: string, count?: number): string[];
/**
 * The URL safe base64 character set
 * */
export const URL_SAFE_BASE_64_ALPHABET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
