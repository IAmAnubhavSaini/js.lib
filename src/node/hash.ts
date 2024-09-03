import { Result } from "../types/Result";
import { createHash } from "crypto";

/**
 * hash256 - Generate a hash from a string
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {Result<string>} - The hash is in .result[0]
 */
function hash256({ content } = { content: "" }): Result<string> {
    return { ok: true, result: [createHash("sha256").update(content).digest().toString("hex")] };
}

/**
 * hash512 - Generate a hash from a string
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {string} - The hash
 */
function hash512({ content } = { content: "" }): Result<string> {
    return { ok: true, result: [createHash("sha512").update(content).digest().toString("hex")] };
}

export { hash256, hash512 };
