/**
 * @param {string} line
 */
function verifyHeading1(line) {
    return line.startsWith("# ");
}

/**
 * @param {string} line
 */
function verifyHeading2(line) {
    return line.startsWith("## ");
}

/**
 * @param {string} line
 */
function verifyHeading3(line) {
    return line.startsWith("### ");
}

/**
 * @param {string} line
 * @returns {string}
 */
function headingToHTML(line) {
    if (!line.startsWith("#")) {
        return line;
    }
    switch (true) {
        case verifyHeading1(line):
            return `<h1>${line.slice(2)}</h1>`;
        case verifyHeading2(line):
            return `<h2>${line.slice(3)}</h2>`;
        case verifyHeading3(line):
            return `<h3>${line.slice(4)}</h3>`;
    }
}

/**
 * A very aggressive sanitization function that removes all HTML tags and replaces
 * some special characters with their HTML entities.
 * @param {string} page
 * @returns {string}
 * We are not replacing the following characters:
 * forward slash, hyphen, underscore, ampersand and hashtag.
 */
function sanitize(page) {
    return page
        .replace(/<[^>]*>/gi, "")
        .replace(/<!--[^>]*-->/gi, "")
        .replace(/</gi, "&lt;")
        .replace(/>/gi, "&gt;")
        .replace(/"/gi, "&quot;")
        .replace(/'/gi, "&#039;")
        .replace(/!/gi, "&#33;")
        .replace(/<script>/gi, "&lt;script&gt;")
        .replace(/<\/script>/gi, "&lt;/script&gt;")
        .replace(/<style>/gi, "&lt;style&gt;")
        .replace(/<\/style>/gi, "&lt;/style&gt;")
        .replace(/`/gi, "&#96;")
        .replace(/\*/gi, "&#42;")
        .replace(/~/gi, "&#126;")
        .replace(/\[/gi, "&#91;")
        .replace(/\]/gi, "&#93;")
        .replace(/\(/gi, "&#40;")
        .replace(/\)/gi, "&#41;")
        .replace(/\{/gi, "&#123;")
        .replace(/\}/gi, "&#125;")
        .replace(/\+/gi, "&#43;")
        .replace(/\./gi, "&#46;")
        .replace(/src=/gi, "src&#61;");
}

function markdownTableToJson(markdownTable) {
    const rows = markdownTable
        .trim()
        .split("\n")
        .map((/** @type {string} */ row) =>
            row
                .split("|")
                .map((cell) => cell.trim())
                .filter((cell) => cell),
        );

    const headers = rows[0];
    const separators = rows[1];
    const dataRows = rows.slice(2);
    const jsonObject = { headers: [], data: [] };
    jsonObject.headers = headers;
    jsonObject.separators = separators;

    dataRows.forEach((/** @type {any[]} */ row) => {
        const entry = {};
        row.forEach((cell, index) => {
            entry[jsonObject.headers[index]] = cell;
        });
        jsonObject.data.push(entry);
    });

    return jsonObject;
}

module.exports = { verifyHeading1, verifyHeading2, verifyHeading3, headingToHTML, sanitize, markdownTableToJson };
