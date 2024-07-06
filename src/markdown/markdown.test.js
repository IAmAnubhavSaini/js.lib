const { headingToHTML, verifyHeading1, verifyHeading2, verifyHeading3, sanitize } = require("./markdown");

describe("headingToHTML", () => {
    it("converts heading level 1 to HTML", () => {
        const line = "# Heading 1";
        expect(headingToHTML(line)).toEqual("<h1>Heading 1</h1>");
    });

    it("converts heading level 2 to HTML", () => {
        const line = "## Heading 2";
        expect(headingToHTML(line)).toEqual("<h2>Heading 2</h2>");
    });

    it("converts heading level 3 to HTML", () => {
        const line = "### Heading 3";
        expect(headingToHTML(line)).toEqual("<h3>Heading 3</h3>");
    });

    it("returns undefined for invalid heading format", () => {
        const line = "Invalid heading";
        expect(headingToHTML(line)).toBe("Invalid heading");
    });
});

describe("verifyHeading1", () => {
    it("returns true for heading level 1", () => {
        const line = "# Heading 1";
        expect(verifyHeading1(line)).toBe(true);
    });

    it("returns false for heading level 2", () => {
        const line = "## Heading 2";
        expect(verifyHeading1(line)).toBe(false);
    });

    it("returns false for heading level 3", () => {
        const line = "### Heading 3";
        expect(verifyHeading1(line)).toBe(false);
    });

    it("returns false for invalid heading format", () => {
        const line = "Invalid heading";
        expect(verifyHeading1(line)).toBe(false);
    });
});

describe("verifyHeading2", () => {
    it("returns false for heading level 1", () => {
        const line = "# Heading 1";
        expect(verifyHeading2(line)).toBe(false);
    });

    it("returns true for heading level 2", () => {
        const line = "## Heading 2";
        expect(verifyHeading2(line)).toBe(true);
    });

    it("returns false for heading level 3", () => {
        const line = "### Heading 3";
        expect(verifyHeading2(line)).toBe(false);
    });

    it("returns false for invalid heading format", () => {
        const line = "Invalid heading";
        expect(verifyHeading2(line)).toBe(false);
    });
});

describe("verifyHeading3", () => {
    it("returns false for heading level 1", () => {
        const line = "# Heading 1";
        expect(verifyHeading3(line)).toBe(false);
    });

    it("returns false for heading level 2", () => {
        const line = "## Heading 2";
        expect(verifyHeading3(line)).toBe(false);
    });

    it("returns true for heading level 3", () => {
        const line = "### Heading 3";
        expect(verifyHeading3(line)).toBe(true);
    });

    it("returns false for invalid heading format", () => {
        const line = "Invalid heading";
        expect(verifyHeading3(line)).toBe(false);
    });
});

describe("sanitize", () => {
    it("should escape < to &lt;", function () {
        expect(sanitize("<")).toBe("&lt;");
    });

    it("should escape > to &gt;", function () {
        expect(sanitize(">")).toBe("&gt;");
    });

    it('should escape " to &quot;', function () {
        expect(sanitize('"')).toBe("&quot;");
    });

    it("should escape ' to &#039;", function () {
        expect(sanitize("'")).toBe("&#039;");
    });

    it("should escape <script> to ''", function () {
        expect(sanitize("<script>")).toBe("");
    });

    it("should escape </script> to ''", function () {
        expect(sanitize("</script>")).toBe("");
    });

    it("should escape <style> to ''", function () {
        expect(sanitize("<style>")).toBe("");
    });

    it("should escape </style> to ''", function () {
        expect(sanitize("</style>")).toBe("");
    });

    it("should escape ` to &#96;", function () {
        expect(sanitize("`")).toBe("&#96;");
    });

    it("should escape * to &#42;", function () {
        expect(sanitize("*")).toBe("&#42;");
    });

    it("should escape ~ to &#126;", function () {
        expect(sanitize("~")).toBe("&#126;");
    });

    it("should escape [ to &#91;", function () {
        expect(sanitize("[")).toBe("&#91;");
    });

    it("should escape ] to &#93;", function () {
        expect(sanitize("]")).toBe("&#93;");
    });

    it("should escape ( to &#40;", function () {
        expect(sanitize("(")).toBe("&#40;");
    });

    it("should escape ) to &#41;", function () {
        expect(sanitize(")")).toBe("&#41;");
    });

    it("should escape { to &#123;", function () {
        expect(sanitize("{")).toBe("&#123;");
    });

    it("should escape } to &#125;", function () {
        expect(sanitize("}")).toBe("&#125;");
    });

    it("should escape + to &#43;", function () {
        expect(sanitize("+")).toBe("&#43;");
    });

    it("should escape . to &#46;", function () {
        expect(sanitize(".")).toBe("&#46;");
    });

    it("should replace src= with src&#61;", function () {
        expect(sanitize("src=")).toBe("src&#61;");
    });

    // Test multiple replacements
    it("should escape multiple characters correctly", function () {
        expect(sanitize("<script>alert('test')</script>")).toBe("alert&#40;&#039;test&#039;&#41;");
    });

    // Test allowed characters
    it("should not escape forward slash", function () {
        expect(sanitize("/")).toBe("/");
    });

    it("should not escape hyphen", function () {
        expect(sanitize("-")).toBe("-");
    });

    it("should not escape underscore", function () {
        expect(sanitize("_")).toBe("_");
    });

    it("should not escape hashtag", function () {
        expect(sanitize("#")).toBe("#");
    });

    // Test combination of allowed and disallowed characters
    it("should handle combination of allowed and disallowed characters correctly", function () {
        expect(sanitize("Hello-World<script>!")).toBe("Hello-World&#33;");
    });

    // Test empty string
    it("should return an empty string when input is empty", function () {
        expect(sanitize("")).toBe("");
    });

    // Test string without special characters
    it("should return the same string when there are no special characters", function () {
        expect(sanitize("HelloWorld")).toBe("HelloWorld");
    });

    it("should handle missing tags", function () {
        const input = '<iframe src="test"></iframe>';
        const expectedOutput = "";
        expect(sanitize(input)).toBe(expectedOutput);
    });

    it("should handle backslashes", function () {
        const input = "C:\\Users\\test";
        const expectedOutput = "C:\\Users\\test"; // Since backslashes are not sanitized, expected output is the same as input
        expect(sanitize(input)).toBe(expectedOutput);
    });

    it("should handle nested tags", function () {
        const input = "<<script>alert(1)</</script>";
        const expectedOutput = "alert&#40;1&#41;";
        expect(sanitize(input)).toBe(expectedOutput);
    });

    it("should handle encoded characters", function () {
        const input = "%3Cscript%3Ealert(1)%3C/script%3E";
        const expectedOutput = "%3Cscript%3Ealert&#40;1&#41;%3C/script%3E";
        expect(sanitize(input)).toBe(expectedOutput);
    });

    it("should handle quotes inside attributes", function () {
        const input = '<img src="test" onerror="alert(1)">';
        const expectedOutput = "";
        expect(sanitize(input)).toBe(expectedOutput);
    });
});
