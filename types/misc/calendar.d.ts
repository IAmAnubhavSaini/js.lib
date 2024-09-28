/**
 * generateCalendar generates a markdown table for a calendar of the given year and month.
 * @param year {number} The year of the calendar e.g. 2024
 * @param month {number} The month of the calendar e.g. 1 for January, 12 for December
 * @returns {string}
 * @example
 * generateCalendar(2024, 1); // generates a markdown table for January 2024
 *
 * Note: In JavaScript, months are zero-indexed, so January is 0, February is 1, etc.
 * But in this function, the month parameter is one-indexed, so January is 1, February is 2, etc.
 * It is never too late to right a wong.
 */
declare function generateCalendar(year: number, month: number): string;
export { generateCalendar };
