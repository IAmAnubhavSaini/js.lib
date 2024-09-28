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
function generateCalendar(year: number, month: number): string {
    const printMonth = month.toString().padStart(2, "0");

    // JS parity or parody, you decide:
    // js months are zero-indexed, so we need to subtract 1 from the month
    month -= 1;

    // Helper function to get the number of days in a month
    function daysInMonth(year: number, month: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    // Helper function to get the week number
    function getWeekNumber(date: Date) {
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (Number(date) - Number(startOfYear)) / 86400000;
        return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
    }

    let html = '<table class="calendar-table">';
    html +=
        '<tr class="calendar-heading"><th class="week">Week</th><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month, daysInMonth(year, month));
    let currentDay = firstDay;
    let currentWeek = getWeekNumber(currentDay);

    while (currentDay <= lastDay) {
        html += '<tr class="calendar-row">';
        html += `<td class="week">${currentWeek}</td>`;

        for (let i = 0; i < 7; i++) {
            if (currentDay.getMonth() === month && currentDay.getDay() === i) {
                const printDay = currentDay.getDate().toString().padStart(2, "0");
                html += `<td class="date">[${year}.${printMonth}.${printDay}](${year}.${printMonth}.${printDay}.md)</td>`;
                currentDay.setDate(currentDay.getDate() + 1);
            } else {
                html += '<td class="empty-cell">&nbsp;</td>';
            }
        }

        html += "</tr>";
        currentWeek = getWeekNumber(currentDay);
    }

    html += "</table>";
    return html;
}

export { generateCalendar };
