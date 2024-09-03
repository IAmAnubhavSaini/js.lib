import { Result } from "../types/Result";
/**
 * hash256 - Generate a hash from a string
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {Result<string>} - The hash is in .result[0]
 */
declare function hash256({ content }?: {
    content: string;
}): Result<string>;
/**
 * hash512 - Generate a hash from a string
 * @param {Object} [options] - The options object
 * @param {string} options.content - The content to hash
 * @return {string} - The hash
 */
declare function hash512({ content }?: {
    content: string;
}): Result<string>;
export { hash256, hash512 };
