const {
    BASE_64_DEFAULT_ALPHABET,
    BASE_64_DEFAULT_PAD,
    codePointFromBinaryString,
    decode,
    encode,
    tokenize,
    URL_SAFE_BASE_64_ALPHABET,
} = require("./base64");

describe("Base64", () => {
    describe("BASE_64_DEFAULT_ALPHABET", () => {
        it("should have 64 characters", () => {
            expect(BASE_64_DEFAULT_ALPHABET.length).toBe(64);
        });
        it("should not be the same as the URL safe alphabet", () => {
            expect(BASE_64_DEFAULT_ALPHABET).not.toBe(URL_SAFE_BASE_64_ALPHABET);
        });
        it("should match the default alphabet", () => {
            expect(BASE_64_DEFAULT_ALPHABET).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
        });
    });
    it("should have a pad character", () => {
        expect(BASE_64_DEFAULT_PAD).toBe("=");
    });
    describe("tokenize", () => {
        it("should tokenize a string", () => {
            expect(tokenize("hello", 3).join("-")).toBe("hel-lo");
        });
        it("should return empty string if token length is 0", () => {
            expect(tokenize("hello", 0).join("-")).toBe("");
        });
        it("should return empty string if input is empty", () => {
            expect(tokenize("", 3).join("-")).toBe("");
        });
    });
    describe("codePointFromBinaryString", () => {
        it("should convert binary to char", () => {
            expect(codePointFromBinaryString("1000001")).toBe(65);
        });
    });

    describe("encode", () => {
        it("should encode a string to base64", () => {
            const encoded = encode("Hello World");
            expect(encoded).toBe("SGVsbG8gV29ybGQ=");
        });
        it("should encode with url safe alphabet", () => {
            const encoded = encode("Hello World", URL_SAFE_BASE_64_ALPHABET);
            expect(encoded).toBe("SGVsbG8gV29ybGQ=");
        });
    });

    describe("decode", () => {
        it("should decode a base64 string", () => {
            const decoded = decode("SGVsbG8gV29ybGQ=");
            expect(decoded).toBe("Hello World");
        });
        it("should decode with url safe alphabet", () => {
            const decoded = decode("SGVsbG8gV29ybGQ=", URL_SAFE_BASE_64_ALPHABET);
            expect(decoded).toBe("Hello World");
        });
    });

    describe("URL_SAFE_BASE_64_ALPHABET", () => {
        it("should have 64 characters", () => {
            expect(URL_SAFE_BASE_64_ALPHABET.length).toBe(64);
        });
        it("should be different from the default alphabet", () => {
            expect(URL_SAFE_BASE_64_ALPHABET).not.toBe(BASE_64_DEFAULT_ALPHABET);
        });
        it("should exactly match the URL safe alphabet", () => {
            expect(URL_SAFE_BASE_64_ALPHABET).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_");
        });
    });
});
