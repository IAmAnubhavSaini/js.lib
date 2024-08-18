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
        .replace(/<[^>]*>/ig, "")
        .replace(/<!--[^>]*-->/ig, "")
        .replace(/</ig, "&lt;")
        .replace(/>/ig, "&gt;")
        .replace(/"/ig, "&quot;")
        .replace(/'/ig, "&#039;")
        .replace(/!/ig, "&#33;")
        .replace(/<script>/ig, "&lt;script&gt;")
        .replace(/<\/script>/ig, "&lt;/script&gt;")
        .replace(/<style>/ig, "&lt;style&gt;")
        .replace(/<\/style>/ig, "&lt;/style&gt;")
        .replace(/`/ig, "&#96;")
        .replace(/\*/ig, "&#42;")
        .replace(/~/ig, "&#126;")
        .replace(/\[/ig, "&#91;")
        .replace(/\]/ig, "&#93;")
        .replace(/\(/ig, "&#40;")
        .replace(/\)/ig, "&#41;")
        .replace(/\{/ig, "&#123;")
        .replace(/\}/ig, "&#125;")
        .replace(/\+/ig, "&#43;")
        .replace(/\./ig, "&#46;")
        .replace(/src=/ig, "src&#61;");
}

module.exports = { verifyHeading1, verifyHeading2, verifyHeading3, headingToHTML, sanitize };
