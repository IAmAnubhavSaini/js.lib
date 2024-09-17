import { randomInt } from "node:crypto";

/**
 * int
 * @returns {number} Random integer
 */
function int() {
    return randomInt(-1 * 2 ** 31, 2 ** 31);
}

/**
 * posint
 * @returns {number} Random positive integer
 */
function posint() {
    return randomInt(0, 2 ** 31);
}

/**
 * negint
 * @returns {number} Random negative integer
 */
function negint() {
    return randomInt(-1 * 2 ** 31, 0);
}

export { int, posint, negint };
