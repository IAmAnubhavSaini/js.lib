/**
 * @param {string} line
 */
export function verifyHeading1(line: string): boolean;
/**
 * @param {string} line
 */
export function verifyHeading2(line: string): boolean;
/**
 * @param {string} line
 */
export function verifyHeading3(line: string): boolean;
/**
 * @param {string} line
 * @returns {string}
 */
export function headingToHTML(line: string): string;
/**
 * A very aggressive sanitization function that removes all HTML tags and replaces
 * some special characters with their HTML entities.
 * @param {string} page
 * @returns {string}
 * We are not replacing the following characters:
 * forward slash, hyphen, underscore, ampersand and hashtag.
 */
export function sanitize(page: string): string;
export function markdownTableToJson(markdownTable: any): {
    headers: any[];
    data: any[];
};
