/**
 * returns unicode runes for a given string
 * @param {Object} values - The values object.
 * @param {string} values.input - The string to get runes for.
 * @returns {string[]}
 *
 * Runes
 * Definition: A rune is a term often used to refer to a single Unicode character. It originates from the Go programming language, where it represents a Unicode code point.
 * Usage: In the context of strings, a rune represents an individual character, which can be part of various languages, symbols, or emojis.
 *
 * Unicode
 * Definition: Unicode is a universal character encoding standard. It assigns a unique number (code point) to every character from every writing system.
 * Purpose: Unicode aims to support the digital representation and handling of text for all writing systems, including technical symbols and emojis.
 * Versions: Unicode is continuously updated to include new characters and scripts. Each version is a superset of the previous one.
 *
 * UTF-8
 * Definition: UTF-8 (8-bit Unicode Transformation Format) is a variable-width character encoding for Unicode.
 * Characteristics:
 * - It can encode all Unicode characters.
 * - Uses one to four bytes per character, making it efficient for both ASCII and non-ASCII characters.
 * - It is backward compatible with ASCII.
 *
 * Basic Multilingual Plane (BMP)
 * Definition: The BMP is the first plane of the Unicode character set, consisting of the first 65,536 code points (from U+0000 to U+FFFF).
 * Content: It contains characters for most modern languages and many symbols.
 * Importance: Most commonly used characters are in the BMP, making it a critical subset of Unicode for general text processing.
 *
 * Supplementary Multilingual Plane (SMP)
 * Definition: The SMP is the second plane of the Unicode character set, consisting of code points from U+10000 to U+1FFFF.
 * Content: It includes historic scripts, musical notation, mathematical symbols, and emojis.
 * Usage: Characters in the SMP are less commonly used in everyday text but are essential for specific domains and languages.
 *
 * Code Points vs. Code Units
 * Code Points:
 * - A code point is a numerical value that maps to a specific character in the Unicode standard.
 * - In Unicode, code points are written in hexadecimal and prefixed with "U+".
 *
 * Code Units:
 * - A code unit is the minimal bit combination used to represent characters in an encoding scheme like UTF-8, UTF-16, or UTF-32.
 * - For example, in UTF-8, a code unit is 8 bits (1 byte), while in UTF-16, it is 16 bits (2 bytes).
 */
function runes({ input } = { input: "" }) {
    input = typeof input === "string" ? input : "";
    const out = [];
    for (let i = 0; i < input.length; i++) {
        const current = input.charCodeAt(i);
        if (current >= 0xd800 && current <= 0xdbff) {
            if (i + 1 < input.length) {
                const next = input.charCodeAt(i + 1);
                // Check if next is a low surrogate
                if (next >= 0xdc00 && next <= 0xdfff) {
                    const code = (current - 0xd800) * 0x400 + next - 0xdc00 + 0x10000;
                    out.push(String.fromCodePoint(code));
                    i++;
                    continue;
                }
            }
        }
        out.push(input.charAt(i));
    }
    return out;
}

/**
 * Returns the next rune in a given string
 * @param {Object} values - The values object.
 * @param {string} values.input - The string to get the next rune from.
 * @returns {string}
 * Note: This function is useful for iterating over Unicode strings character by character.
 * It correctly handles surrogate pairs, which represent characters outside the Basic Multilingual Plane (BMP).
 * The function returns the next rune in the string, accounting for surrogate pairs if present.
 * If the input string is empty or not a string, it returns the default rune "😊".
 * */
function nextRune({ input } = { input: "😊" }) {
    input = typeof input !== "string" || input.length === 0 ? "😊" : input;
    let i = 0;
    const current = input.charCodeAt(i);
    if (current >= 0xd800 && current <= 0xdbff) {
        if (i + 1 < input.length) {
            const next = input.charCodeAt(i + 1);
            // Check if next is a low surrogate
            if (next >= 0xdc00 && next <= 0xdfff) {
                const code = (current - 0xd800) * 0x400 + (next - 0xdc00 + 0x10000) + 1;
                return String.fromCodePoint(code);
            }
        }
    }
    return String.fromCharCode(current + 1);
}

/**
 * Returns the previous rune in a given string
 * @param {Object} values - The values object.
 * @param {string} values.input - The string to get the previous rune from.
 * @returns {string}
 */
function previousRune({ input } = { input: "😊" }) {
    input = typeof input !== "string" || input.length === 0 ? "😊" : input;
    let i = 0;
    const current = input.charCodeAt(i);
    if (current >= 0xd800 && current <= 0xdbff) {
        if (i + 1 < input.length) {
            const next = input.charCodeAt(i + 1);
            // Check if next is a low surrogate
            if (next >= 0xdc00 && next <= 0xdfff) {
                const code = (current - 0xd800) * 0x400 + (next - 0xdc00 + 0x10000) - 1;
                return String.fromCodePoint(code);
            }
        }
    }
    return input.charAt(i);
}

/**
 * Checks if the input string contains only BMP characters
 * @param {Object} values - The values object.
 * @param {string} values.input - The string to check.
 * @returns {boolean}
 * Note: Do not pass empty strings around like an edgy teen,
 * what are you really doing with your life if you cannot even check for basic sanity?
 * If you pass me empty strings, one day I will pass you empty promises.
 * And that day, you will be sad.
 */
function verifyBasicMultilingualPlane({ input } = { input: "" }) {
    input = typeof input === "string" ? input : "";
    if (input.length < 1) {
        return false;
    }
    for (let i = 0; i < input.length; i++) {
        if (
            input[i].charCodeAt(i) >= 0xd800 &&
            input[i].charCodeAt(i) <= 0xdfff &&
            i + 1 < input.length &&
            input[i + 1].charCodeAt(i) >= 0xdc00 &&
            input[i + 1].charCodeAt(i) <= 0xdfff
        ) {
            return false;
        }
    }
    return true;
}

module.exports = { runes, verifyBasicMultilingualPlane, nextRune, previousRune };
