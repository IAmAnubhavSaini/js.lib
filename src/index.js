const { base64 } = require("./string/index.js");
const {
    defaultArray,
    list: { filterReduce, foldl, foldr, take, tail, head },
    median,
    randomArray,
    randomMatrix,
    resetArray,
    reverseSortedArray,
    rotateLeft,
    rotateRight,
    sortedArray,
    zeroNumberArray,
    zeroStringArray,
} = require("./array/index.js");
const { number } = require("./heap/index.js");
const { fs } = require("./node/index.js");

const BooleanT = require("./primitives/boolean");
const Default = require("./primitives/default");
const FalseT = require("./primitives/false");
const StringT = require("./primitives/string");
const TrueT = require("./primitives/true");

const { canvas } = require("./canvas/canvas");
const Conversions = require("./conversions/conversions");

const { objectToString, deepEqual, keyEqual, valueEqual, findKeys } = require("./object/object");

const { nothing, just, maybe, either, list, future, state } = require("./functional/monad");
const { headingToHTML, sanitize, verifyHeading1, verifyHeading2, verifyHeading3 } = require("./markdown/markdown.js");

module.exports = {
    base64,
    canvas,
    Conversions,
    fs,
    heap: {
        number,
    },
    list: { filterReduce, foldl, foldr, take, tail, head },
    array: {
        defaultArray,
        median,
        randomArray,
        randomMatrix,
        resetArray,
        reverseSortedArray,
        rotateLeft,
        rotateRight,
        sortedArray,
        zeroNumberArray,
        zeroStringArray,
    },
    primitives: {
        BooleanT,
        Default,
        FalseT,
        StringT,
        TrueT,
    },
    object: {
        objectToString,
        deepEqual,
        keyEqual,
        valueEqual,
        findKeys,
    },
    monad: {
        either,
        future,
        just,
        list,
        maybe,
        nothing,
        state,
    },
    markdown: {
        headingToHTML,
        sanitize,
        verifyHeading1,
        verifyHeading2,
        verifyHeading3,
    },
};
