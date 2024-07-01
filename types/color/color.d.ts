/**
 * Object containing basic color names and their corresponding hexadecimal values.
 *
 * @type {Object.<string, string>}
 */
export const BASIC_COLORS: {
    [x: string]: string;
};
/**
 * Converts a hexadecimal color code to RGB format.
 *
 * @param {string} hex - The hexadecimal color code to convert.
 * @returns {object} An object representing the RGB values of the color.
 */
export function hexToRgb(hex: string): object;
/**
 * Converts an RGB color object to a hexadecimal color string.
 *
 * @param {Object} color - The RGB color object.
 * @param {number} color.r - The red component (0-255).
 * @param {number} color.g - The green component (0-255).
 * @param {number} color.b - The blue component (0-255).
 * @returns {string} The hexadecimal color string.
 */
export function rgbToHex({ r, g, b }: {
    r: number;
    g: number;
    b: number;
}): string;
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
export function rgbToRgba({ r, g, b }: {
    r: number;
    g: number;
    b: number;
}): any;
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
export function rgbToRgbString({ r, g, b }: {
    r: number;
    g: number;
    b: number;
}): string;
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
export function rgbToRgbaString({ r, g, b, a }?: {
    r: number;
    g: number;
    b: number;
    a: number;
}): string;
