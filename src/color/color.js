/**
 * Object containing basic color names and their corresponding hexadecimal values.
 *
 * @type {Object.<string, string>}
 */
const BASIC_COLORS = {
    Aqua: "00FFFF",
    Black: "000000",
    Blue: "0000FF",
    Fuchsia: "FF00FF",
    Gray: "808080",
    Green: "008000",
    Lime: "00FF00",
    Maroon: "800000",
    Navy: "000080",
    Olive: "808000",
    Purple: "800080",
    Red: "FF0000",
    Silver: "C0C0C0",
    Teal: "008080",
    White: "FFFFFF",
    Yellow: "FFFF00",
};

/**
 * Converts a hexadecimal color code to RGB format.
 *
 * @param {string} hex - The hexadecimal color code to convert.
 * @returns {object} An object representing the RGB values of the color.
 */
function hexToRgb(hex) {
    if (!hex) {
        return { r: 0, g: 0, b: 0 };
    }
    const hexValue = hex.replace("#", "");
    if ([3, 4, 6, 8].indexOf(hexValue.length) === -1) {
        return { r: 0, g: 0, b: 0 };
    }
    if (/[^0-9A-F]/i.test(hexValue)) {
        return { r: 0, g: 0, b: 0 };
    }
    if (hexValue.length === 6 || hexValue.length === 8) {
        const r = parseInt(hexValue.substring(0, 2), 16);
        const g = parseInt(hexValue.substring(2, 4), 16);
        const b = parseInt(hexValue.substring(4, 6), 16);
        return { r, g, b };
    } else if (hexValue.length === 3 || hexValue.length === 4) {
        const r = parseInt(hexValue.substring(0, 1).repeat(2), 16);
        const g = parseInt(hexValue.substring(1, 2).repeat(2), 16);
        const b = parseInt(hexValue.substring(2, 3).repeat(2), 16);
        return { r, g, b };
    } else {
        return { r: 0, g: 0, b: 0 };
    }
}

/**
 * Converts an RGB color object to a hexadecimal color string.
 *
 * @param {Object} color - The RGB color object.
 * @param {number} color.r - The red component (0-255).
 * @param {number} color.g - The green component (0-255).
 * @param {number} color.b - The blue component (0-255).
 * @returns {string} The hexadecimal color string.
 */
function rgbToHex({ r, g, b }) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

/**
 * Converts an RGB color object to RGB string format.
 * The RGB string format is in the form "rgb(r, g, b)".
 * Each component is an integer in the range [0, 255].
 * If a component is outside this range, it is clamped to the nearest valid value.
 * @param {Object} color - The RGB color object.
 * @param {number} color.r - The red component (0-255).
 * @param {number} color.g - The green component (0-255).
 * @param {number} color.b - The blue component (0-255).
 * @returns {string} The RGB string representation of the color.
 */
function rgbToRgbString({ r, g, b }) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Converts an RGB color object to RGBA format.
 *
 * @param {Object} color - The RGB color object.
 * @param {number} color.r - The red component (0-255).
 * @param {number} color.g - The green component (0-255).
 * @param {number} color.b - The blue component (0-255).
 * @returns {Object} - The RGBA color object.
 * @property {number} r - The red component (0-255).
 * @property {number} g - The green component (0-255).
 * @property {number} b - The blue component (0-255).
 * @property {number} a - The alpha component (0-1).
 */
function rgbToRgba({ r, g, b }) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    return { r, g, b, a: 1 };
}

/**
 * Converts an RGB color object to an RGBA string.
 *
 * @param {Object} color - The RGB color object.
 * @param {number} color.r - The red value (0-255).
 * @param {number} color.g - The green value (0-255).
 * @param {number} color.b - The blue value (0-255).
 * @param {number} color.a - The alpha value (0-1).
 * @returns {string} The RGBA string representation of the color.
 */
function rgbToRgbaString({ r, g, b, a } = { r: 0, g: 0, b: 0, a: 1 }) {
    r = Math.min(255, Math.max(0, typeof r === "number" ? r : 0));
    g = Math.min(255, Math.max(0, typeof g === "number" ? g : 0));
    b = Math.min(255, Math.max(0, typeof b === "number" ? b : 0));
    a = Math.min(1, Math.max(0, typeof a === "number" ? a : 1));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

module.exports = {
    BASIC_COLORS,
    hexToRgb,
    rgbToHex,
    rgbToRgba,
    rgbToRgbString,
    rgbToRgbaString,
};
