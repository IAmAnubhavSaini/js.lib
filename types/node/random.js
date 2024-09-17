"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int = int;
exports.posint = posint;
exports.negint = negint;
const node_crypto_1 = require("node:crypto");
/**
 * int
 * @returns {number} Random integer
 */
function int() {
    return (0, node_crypto_1.randomInt)(-1 * 2 ** 31, 2 ** 31);
}
/**
 * posint
 * @returns {number} Random positive integer
 */
function posint() {
    return (0, node_crypto_1.randomInt)(0, 2 ** 31);
}
/**
 * negint
 * @returns {number} Random negative integer
 */
function negint() {
    return (0, node_crypto_1.randomInt)(-1 * 2 ** 31, 0);
}
