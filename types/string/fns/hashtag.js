"use strict";
/**
 *
 * @param {string} line the line to get the hash tags from
 * @returns {string[]}
 */
function getHashTags(line) {
    return Array.from(line.match(/#[a-zA-Z0-9_\-\/]+/g) || []);
}
/**
 * Calculates the frequency of hashtags in the given lines of text.
 *
 * @param {string[]} lines - An array of strings representing the lines of text.
 * @param {string[]} hashtags - An array of strings representing the hashtags to calculate the frequency for.
 * @returns {Object} - An object containing the frequency of each hashtag.
 */
function hashtagFrequency(lines, hashtags) {
    if (hashtags.length === 0) {
        return {};
    }
    const frequency = {};
    /**
     * Set containing the new hashtags.
     * @type {Set<string>}
     */
    const newHashtags = new Set(hashtags
        .map((hashtag) => {
        // Split each hashtag by "/"
        return hashtag.split("/").map((_, i, parts) => {
            // Join the parts of the hashtag up to the current index (inclusive)
            return parts.slice(0, i + 1).join("/");
        });
    })
        .reduce((acc, val) => {
        // Concatenate all the hashtag parts into a single array
        return acc.concat(val);
    }, []));
    newHashtags.forEach((hashtag) => {
        frequency[hashtag] = 0;
    });
    if (lines.length === 0) {
        return frequency;
    }
    lines.forEach((line) => {
        newHashtags.forEach((part) => {
            if (line.includes(part)) {
                frequency[part]++;
            }
        });
    });
    return frequency;
}
module.exports = { getHashTags, hashtagFrequency };
