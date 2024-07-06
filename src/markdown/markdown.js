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
        .replace(/<[^>]*>/g, "")
        .replace(/<!--[^>]*-->/g, "")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/!/g, "&#33;")
        .replace(/<script>/g, "&lt;script&gt;")
        .replace(/<\/script>/g, "&lt;/script&gt;")
        .replace(/<style>/g, "&lt;style&gt;")
        .replace(/<\/style>/g, "&lt;/style&gt;")
        .replace(/`/g, "&#96;")
        .replace(/\*/g, "&#42;")
        .replace(/~/g, "&#126;")
        .replace(/\[/g, "&#91;")
        .replace(/\]/g, "&#93;")
        .replace(/\(/g, "&#40;")
        .replace(/\)/g, "&#41;")
        .replace(/\{/g, "&#123;")
        .replace(/\}/g, "&#125;")
        .replace(/\+/g, "&#43;")
        .replace(/\./g, "&#46;")
        .replace("src=", "src&#61;");
}

module.exports = { verifyHeading1, verifyHeading2, verifyHeading3, headingToHTML, sanitize };
