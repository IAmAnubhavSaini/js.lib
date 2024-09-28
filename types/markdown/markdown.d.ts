/**
 * @param {string} line
 */
declare function verifyHeading1(line: any): any;
/**
 * @param {string} line
 */
declare function verifyHeading2(line: any): any;
/**
 * @param {string} line
 */
declare function verifyHeading3(line: any): any;
/**
 * @param {string} line
 * @returns {string}
 */
declare function headingToHTML(line: any): any;
/**
 * A very aggressive sanitization function that removes all HTML tags and replaces
 * some special characters with their HTML entities.
 * @param {string} page
 * @returns {string}
 * We are not replacing the following characters:
 * forward slash, hyphen, underscore, ampersand and hashtag.
 */
declare function sanitize(page: any): any;
declare function markdownTableToJson(markdownTable: any): {
    headers: any[];
    data: any[];
    separators: any[];
};
/**
 * htmlTableToMarkdownDOM converts an HTML table to a markdown table.
 * @param html {string} The HTML table to convert
 * @returns {string}    The markdown table
 * Note: This function works with DOMParser, which is not available in Node.js.
 * Note: This function is not perfect and may not work with all HTML tables.
 * This should work with ../misc/calendar.ts#generateCalendar function though.
 */
declare function htmlTableToMarkdownDOM(html: string): string;
/**
 * htmlTableToMarkdown converts an HTML table to a markdown table.
 * @param html {string} The HTML table to convert
 * @returns {string}    The markdown table
 * Note: This function works with jsdom, which is available in Node.js.
 * Note: This function is not perfect and may not work with all HTML tables.
 * This should work with ../misc/calendar.ts#generateCalendar function though.
 */
declare function htmlTableToMarkdown(html: string): string;
export { verifyHeading1, verifyHeading2, verifyHeading3, headingToHTML, sanitize, markdownTableToJson, htmlTableToMarkdownDOM, htmlTableToMarkdown, };
