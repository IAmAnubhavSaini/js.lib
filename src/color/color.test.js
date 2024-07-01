const { BASIC_COLORS, hexToRgb, rgbToHex, rgbToRgba, rgbToRgbString, rgbToRgbaString } = require("./color");

describe("BASIC_COLORS", () => {
    it("should have the correct number of color entries", () => {
        const colorCount = Object.keys(BASIC_COLORS).length;
        expect(colorCount).toBe(16);
    });

    it("should have the correct hexadecimal values for each color", () => {
        expect(BASIC_COLORS.Aqua).toBe("00FFFF");
        expect(BASIC_COLORS.Black).toBe("000000");
        expect(BASIC_COLORS.Blue).toBe("0000FF");
        expect(BASIC_COLORS.Fuchsia).toBe("FF00FF");
        expect(BASIC_COLORS.Gray).toBe("808080");
        expect(BASIC_COLORS.Green).toBe("008000");
        expect(BASIC_COLORS.Lime).toBe("00FF00");
        expect(BASIC_COLORS.Maroon).toBe("800000");
        expect(BASIC_COLORS.Navy).toBe("000080");
        expect(BASIC_COLORS.Olive).toBe("808000");
        expect(BASIC_COLORS.Purple).toBe("800080");
        expect(BASIC_COLORS.Red).toBe("FF0000");
        expect(BASIC_COLORS.Silver).toBe("C0C0C0");
        expect(BASIC_COLORS.Teal).toBe("008080");
        expect(BASIC_COLORS.White).toBe("FFFFFF");
        expect(BASIC_COLORS.Yellow).toBe("FFFF00");
    });
});

describe("hexToRgb", () => {
    it("should convert a hexadecimal color code to RGB format", () => {
        expect(hexToRgb("#FF0000")).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb("#00FF00")).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb("#0000FF")).toEqual({ r: 0, g: 0, b: 255 });
        expect(hexToRgb("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
        expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
        expect(hexToRgb("#FF00FF")).toEqual({ r: 255, g: 0, b: 255 });
    });

    it("should handle lowercase hexadecimal color codes", () => {
        expect(hexToRgb("#ff0000")).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb("#00ff00")).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb("#0000ff")).toEqual({ r: 0, g: 0, b: 255 });
    });

    it("should handle shorthand hexadecimal color codes", () => {
        expect(hexToRgb("#F00")).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb("#0F0")).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb("#00F")).toEqual({ r: 0, g: 0, b: 255 });
    });

    it("should return black for an invalid hexadecimal color code", () => {
        expect(hexToRgb("#12345")).toEqual({ r: 0, g: 0, b: 0 });
        expect(hexToRgb("#GHIJKL")).toEqual({ r: 0, g: 0, b: 0 });
        expect(hexToRgb("#1234567")).toEqual({ r: 0, g: 0, b: 0 });
    });

    it("should handle uppercase hexadecimal color codes with leading zeros", () => {
        expect(hexToRgb("#0000FF")).toEqual({ r: 0, g: 0, b: 255 });
        expect(hexToRgb("#00FFFF")).toEqual({ r: 0, g: 255, b: 255 });
        expect(hexToRgb("#FF00FF")).toEqual({ r: 255, g: 0, b: 255 });
    });

    it("should handle lowercase hexadecimal color codes with leading zeros", () => {
        expect(hexToRgb("#0000ff")).toEqual({ r: 0, g: 0, b: 255 });
        expect(hexToRgb("#00ffff")).toEqual({ r: 0, g: 255, b: 255 });
        expect(hexToRgb("#ff00ff")).toEqual({ r: 255, g: 0, b: 255 });
    });

    it("should handle uppercase shorthand hexadecimal color codes", () => {
        expect(hexToRgb("#F00")).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb("#0F0")).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb("#00F")).toEqual({ r: 0, g: 0, b: 255 });
    });

    it("should handle lowercase shorthand hexadecimal color codes", () => {
        expect(hexToRgb("#f00")).toEqual({ r: 255, g: 0, b: 0 });
        expect(hexToRgb("#0f0")).toEqual({ r: 0, g: 255, b: 0 });
        expect(hexToRgb("#00f")).toEqual({ r: 0, g: 0, b: 255 });
    });
});
describe("rgbToHex", () => {
    it("should convert an RGB color object to a hexadecimal color string", () => {
        expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe("#ff0000");
        expect(rgbToHex({ r: 0, g: 255, b: 0 })).toBe("#00ff00");
        expect(rgbToHex({ r: 0, g: 0, b: 255 })).toBe("#0000ff");
        expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe("#ffffff");
        expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe("#000000");
        expect(rgbToHex({ r: 255, g: 0, b: 255 })).toBe("#ff00ff");
    });

    it("should clamp RGB values outside the range [0, 255]", () => {
        expect(rgbToHex({ r: -10, g: 300, b: 1000 })).toBe("#00ffff");
        expect(rgbToHex({ r: 256, g: 500, b: -100 })).toBe("#ffff00");
    });
});
describe("rgbToHex", () => {
    it("should convert an RGB color object to a hexadecimal color string", () => {
        expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe("#ff0000");
        expect(rgbToHex({ r: 0, g: 255, b: 0 })).toBe("#00ff00");
        expect(rgbToHex({ r: 0, g: 0, b: 255 })).toBe("#0000ff");
        expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe("#ffffff");
        expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe("#000000");
        expect(rgbToHex({ r: 255, g: 0, b: 255 })).toBe("#ff00ff");
    });

    it("should clamp RGB values outside the range [0, 255]", () => {
        expect(rgbToHex({ r: -10, g: 300, b: 1000 })).toBe("#00ffff");
        expect(rgbToHex({ r: 256, g: 500, b: -100 })).toBe("#ffff00");
    });
});
describe("rgbToRgbString", () => {
    it("should convert an RGB color object to RGB string format", () => {
        expect(rgbToRgbString({ r: 255, g: 0, b: 0 })).toBe("rgb(255, 0, 0)");
        expect(rgbToRgbString({ r: 0, g: 255, b: 0 })).toBe("rgb(0, 255, 0)");
        expect(rgbToRgbString({ r: 0, g: 0, b: 255 })).toBe("rgb(0, 0, 255)");
        expect(rgbToRgbString({ r: 255, g: 255, b: 255 })).toBe("rgb(255, 255, 255)");
        expect(rgbToRgbString({ r: 0, g: 0, b: 0 })).toBe("rgb(0, 0, 0)");
        expect(rgbToRgbString({ r: 255, g: 0, b: 255 })).toBe("rgb(255, 0, 255)");
    });
    it("should clamp RGB values outside the range [0, 255]", () => {
        expect(rgbToRgbString({ r: -10, g: 300, b: 1000 })).toBe("rgb(0, 255, 255)");
        expect(rgbToRgbString({ r: 256, g: 500, b: -100 })).toBe("rgb(255, 255, 0)");
    });
});
describe("rgbToRgba", () => {
    it("should convert an RGB color object to RGBA format", () => {
        expect(rgbToRgba({ r: 255, g: 0, b: 0 })).toEqual({ r: 255, g: 0, b: 0, a: 1 });
        expect(rgbToRgba({ r: 0, g: 255, b: 0 })).toEqual({ r: 0, g: 255, b: 0, a: 1 });
        expect(rgbToRgba({ r: 0, g: 0, b: 255 })).toEqual({ r: 0, g: 0, b: 255, a: 1 });
        expect(rgbToRgba({ r: 255, g: 255, b: 255 })).toEqual({ r: 255, g: 255, b: 255, a: 1 });
        expect(rgbToRgba({ r: 0, g: 0, b: 0 })).toEqual({ r: 0, g: 0, b: 0, a: 1 });
        expect(rgbToRgba({ r: 255, g: 0, b: 255 })).toEqual({ r: 255, g: 0, b: 255, a: 1 });
    });
    it("should clamp RGB values outside the range [0, 255]", () => {
        expect(rgbToRgba({ r: -10, g: 300, b: 1000 })).toEqual({ r: 0, g: 255, b: 255, a: 1 });
        expect(rgbToRgba({ r: 256, g: 500, b: -100 })).toEqual({ r: 255, g: 255, b: 0, a: 1 });
    });
});

describe("rgbToRgbaString", () => {
    it("should convert an RGB color object to RGBA string format", () => {
        expect(rgbToRgbaString({ r: 255, g: 0, b: 0, a: 1 })).toBe("rgba(255, 0, 0, 1)");
        expect(rgbToRgbaString({ r: 0, g: 255, b: 0, a: 0.5 })).toBe("rgba(0, 255, 0, 0.5)");
        expect(rgbToRgbaString({ r: 0, g: 0, b: 255, a: 0.75 })).toBe("rgba(0, 0, 255, 0.75)");
        expect(rgbToRgbaString({ r: 255, g: 255, b: 255, a: 0 })).toBe("rgba(255, 255, 255, 0)");
        expect(rgbToRgbaString({ r: 0, g: 0, b: 0, a: 0.25 })).toBe("rgba(0, 0, 0, 0.25)");
        expect(rgbToRgbaString({ r: 255, g: 0, b: 255, a: 0.8 })).toBe("rgba(255, 0, 255, 0.8)");
    });

    it("should clamp RGB values outside the range [0, 255]", () => {
        expect(rgbToRgbaString({ r: -10, g: 300, b: 1000, a: 1 })).toBe("rgba(0, 255, 255, 1)");
        expect(rgbToRgbaString({ r: 256, g: 500, b: -100, a: 0.5 })).toBe("rgba(255, 255, 0, 0.5)");
    });

    it("should clamp alpha value outside the range [0, 1]", () => {
        expect(rgbToRgbaString({ r: 255, g: 0, b: 0, a: -0.5 })).toBe("rgba(255, 0, 0, 0)");
        expect(rgbToRgbaString({ r: 0, g: 255, b: 0, a: 1.5 })).toBe("rgba(0, 255, 0, 1)");
    });

    it("should return black for invalid RGB values", () => {
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: "invalid", g: 0, b: 0, a: 1 })).toBe("rgba(0, 0, 0, 1)");
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 255, g: "invalid", b: 0, a: 1 })).toBe("rgba(255, 0, 0, 1)");
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 255, g: 0, b: "invalid", a: 1 })).toBe("rgba(255, 0, 0, 1)");
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 255, g: 0, b: 0, a: "invalid" })).toBe("rgba(255, 0, 0, 1)");
    });

    it("should return black for missing RGB values", () => {
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ g: 0, b: 0, a: 1 })).toBe("rgba(0, 0, 0, 1)");
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 0, b: 0, a: 1 })).toBe("rgba(0, 0, 0, 1)");
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 0, g: 0, a: 1 })).toBe("rgba(0, 0, 0, 1)");
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 0, g: 0, b: 0 })).toBe("rgba(0, 0, 0, 1)");
    });

    it("should return black for invalid alpha value", () => {
        // @ts-ignore - Testing invalid input
        expect(rgbToRgbaString({ r: 0, g: 0, b: 0, a: "invalid" })).toBe("rgba(0, 0, 0, 1)");
        expect(rgbToRgbaString({ r: 0, g: 0, b: 0, a: -1 })).toBe("rgba(0, 0, 0, 0)");
        expect(rgbToRgbaString({ r: 0, g: 0, b: 0, a: 2 })).toBe("rgba(0, 0, 0, 1)");
    });

    it("should convert an RGB color object to an RGBA string", () => {
        expect(rgbToRgbaString({ r: 255, g: 0, b: 0, a: 1 })).toBe("rgba(255, 0, 0, 1)");
        expect(rgbToRgbaString({ r: 0, g: 255, b: 0, a: 0.5 })).toBe("rgba(0, 255, 0, 0.5)");
        expect(rgbToRgbaString({ r: 0, g: 0, b: 255, a: 0.75 })).toBe("rgba(0, 0, 255, 0.75)");
        expect(rgbToRgbaString({ r: 255, g: 255, b: 255, a: 0 })).toBe("rgba(255, 255, 255, 0)");
        expect(rgbToRgbaString({ r: 0, g: 0, b: 0, a: 0.25 })).toBe("rgba(0, 0, 0, 0.25)");
        expect(rgbToRgbaString({ r: 255, g: 0, b: 255, a: 0.8 })).toBe("rgba(255, 0, 255, 0.8)");
    });
    it("should clamp RGB values outside the range [0, 255]", () => {
        expect(rgbToRgbaString({ r: -10, g: 300, b: 1000, a: 1 })).toBe("rgba(0, 255, 255, 1)");
        expect(rgbToRgbaString({ r: 256, g: 500, b: -100, a: 0.5 })).toBe("rgba(255, 255, 0, 0.5)");
    });
    it("should clamp alpha value outside the range [0, 1]", () => {
        expect(rgbToRgbaString({ r: 255, g: 0, b: 0, a: -0.5 })).toBe("rgba(255, 0, 0, 0)");
        expect(rgbToRgbaString({ r: 0, g: 255, b: 0, a: 1.5 })).toBe("rgba(0, 255, 0, 1)");
    });
});
