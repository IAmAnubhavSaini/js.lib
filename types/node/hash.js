"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash256 = hash256;
exports.hash512 = hash512;
const crypto_1 = require("crypto");
/**
 * hash256 - Generate a hash from a string
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {Result<string>} - The hash is in .result[0]
 */
function hash256({ content } = { content: "" }) {
    return { ok: true, result: [(0, crypto_1.createHash)("sha256").update(content).digest().toString("hex")] };
}
/**
 * hash512 - Generate a hash from a string
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {string} - The hash
 */
function hash512({ content } = { content: "" }) {
    return { ok: true, result: [(0, crypto_1.createHash)("sha512").update(content).digest().toString("hex")] };
}
