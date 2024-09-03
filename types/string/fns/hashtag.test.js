"use strict";
const { getHashTags, hashtagFrequency } = require("./hashtag");
describe("getHashTags", () => {
    it("returns an empty array if there are no hash tags in the line", () => {
        expect(getHashTags("This is a test line")).toEqual([]);
    });
    it("returns an array with a single hash tag", () => {
        expect(getHashTags("This is a #test line")).toEqual(["#test"]);
    });
    it("returns an array with multiple hash tags", () => {
        expect(getHashTags("This is a #test #line with #multiple #hashTags")).toEqual([
            "#test",
            "#line",
            "#multiple",
            "#hashTags",
        ]);
    });
    it("accepts hash tags that are not followed by alphabetic characters", () => {
        expect(getHashTags("This is a #test #line with #123 #hashTags")).toEqual([
            "#test",
            "#line",
            "#123",
            "#hashTags",
        ]);
    });
    it("accepts hyphen, underscore, and forward slash characters in hash tags", () => {
        expect(getHashTags("This is a #test #line with #hyphen-underscore/forward-slash")).toEqual([
            "#test",
            "#line",
            "#hyphen-underscore/forward-slash",
        ]);
    });
    it("returns an empty array if the line is empty", () => {
        expect(getHashTags("")).toEqual([]);
    });
    it("returns an empty array if the line is only a hash tag", () => {
        expect(getHashTags("#")).toEqual([]);
    });
    it("returns only the hash tags and not the heading title", () => {
        expect(getHashTags("# #This is a test line")).toEqual(["#This"]);
    });
});
describe("hashtagFrequency", () => {
    it("returns an empty object if there are no lines", () => {
        expect(hashtagFrequency([], ["#test", "#line"])).toEqual({ "#test": 0, "#line": 0 });
    });
    it("returns an object with zero frequency for each hashtag if there are no matching lines", () => {
        const lines = ["This is a test line", "Another line without hashtags", "Yet another line without hashtags"];
        const hashtags = ["#test", "#line"];
        const expectedFrequency = {
            "#test": 0,
            "#line": 0,
        };
        expect(hashtagFrequency(lines, hashtags)).toEqual(expectedFrequency);
    });
    it("returns the correct frequency for each hashtag", () => {
        const lines = [
            "This is a #test line",
            "Another line with #test and #line hashtags",
            "Yet another line with #test and #line hashtags",
        ];
        const hashtags = ["#test", "#line"];
        const expectedFrequency = {
            "#test": 3,
            "#line": 2,
        };
        expect(hashtagFrequency(lines, hashtags)).toEqual(expectedFrequency);
    });
    it("returns the hashtags in descending order of frequency", () => {
        const lines = [
            "This is a #test line",
            "Another line with #test and #line hashtags",
            "Yet another line with #test and #line hashtags",
        ];
        const hashtags = ["#test", "#line"];
        const expectedFrequency = {
            "#test": 3,
            "#line": 2,
        };
        expect(hashtagFrequency(lines, hashtags)).toEqual(expectedFrequency);
    });
    it("returns the correct frequency for each hashtag with a different order of lines", () => {
        const lines = [
            "This is a #test line",
            "# #Yet another line with #test and #line hashtags",
            "#Another line with #test and #line hashtags",
        ];
        const hashtags = ["#test", "#line", "#Another", "#Yet"];
        const expectedFrequency = {
            "#test": 3,
            "#line": 2,
            "#Another": 1,
            "#Yet": 1,
        };
        expect(hashtagFrequency(lines, hashtags)).toEqual(expectedFrequency);
    });
    it("returns the correct frequency for each given hashtag", () => {
        const lines = [
            "This is a #test line",
            "# #Yet another line with #test and #line hashtags",
            "#Another line with #test and #line hashtags",
        ];
        const hashtags = ["#Another", "#Yet"];
        const expectedFrequency = {
            "#Another": 1,
            "#Yet": 1,
        };
        expect(hashtagFrequency(lines, hashtags)).toEqual(expectedFrequency);
    });
    it("returns the correct frequency for each hashtag with a slash", () => {
        const lines = [
            "This is a #test/one line",
            "Another line with #test/one/two and #line hashtags",
            "Yet another line with #test and #line hashtags",
        ];
        const hashtags = ["#line", "#test", "#test/one", "#test/one/two"];
        const expectedFrequency = {
            "#line": 2,
            "#test": 3,
            "#test/one": 2,
            "#test/one/two": 1,
        };
        expect(hashtagFrequency(lines, hashtags)).toEqual(expectedFrequency);
    });
});
