import { fs, hash256, hash512, platform, osname, isLinux, isWindows, isMac } from "./node/index";
import { Result } from "./types/Result";

const { base64 } = require("./string/index.js");
const {
    defaultArray,
    list,
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
const { NumberMinHeap, NumberMaxHeap } = require("./heap/index.js");

const BooleanT = require("./primitives/boolean");
const Default = require("./primitives/default");
const FalseT = require("./primitives/false");
const StringT = require("./primitives/string");
const TrueT = require("./primitives/true");

const { canvas } = require("./canvas/canvas");
const Conversions = require("./conversions/conversions");

const { objectToString, deepEqual, keyEqual, valueEqual, findKeys } = require("./object/object");

const { nothing, just, maybe, either, list: monad_list, future, state } = require("./functional/monad");
const { headingToHTML, sanitize, verifyHeading1, verifyHeading2, verifyHeading3 } = require("./markdown/markdown.js");

const coinChange = require("./misc/coinChange");

export {
    base64,
    canvas,
    Conversions,
    fs,
    hash256,
    hash512,
    platform,
    osname,
    isLinux,
    isWindows,
    isMac,
    NumberMinHeap,
    NumberMaxHeap,
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
    list,
    either,
    future,
    just,
    monad_list,
    maybe,
    nothing,
    state,
    headingToHTML,
    sanitize,
    verifyHeading1,
    verifyHeading2,
    verifyHeading3,
    coinChange,
    objectToString,
    deepEqual,
    keyEqual,
    valueEqual,
    findKeys,
    BooleanT,
    Default,
    FalseT,
    StringT,
    TrueT,
};

export type { Result };
