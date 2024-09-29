import {
    fs,
    DirInfo,
    hash256,
    hash512,
    platform,
    osname,
    isLinux,
    isWindows,
    isMac,
    readStream,
    LinuxDirectoryNode,
    int,
    posint,
    negint,
} from "./node/index";
import { Result, ErrorType, ValueType, Result2 } from "./types/Result";
import { Option, Some, None } from "./types/Option";
import { isString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf, isEmptyString } from "./checks/type";
import { filterOutKeysFromObject, filterInKeysFromObject } from "./object/filter";
import { jsonToCsv, detectCircularity, validateJsonAndConvertToCsv } from "./json";

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
    arrayMayGet,
    chunk,
} = require("./array/index.js");
const { NumberMinHeap, NumberMaxHeap } = require("./heap/index.js");

const BooleanT = require("./primitives/boolean");
const Default = require("./primitives/default");
const FalseT = require("./primitives/false");
import StringT from "./primitives/string";
import { htmlTableToMarkdown, htmlTableToMarkdownDOM } from "./markdown/markdown";
import { generateCalendar } from "./misc/calendar";
import { filterIn, filterInStream, filterOut, filterOutStream, inplaceFilterIn, inplaceFilterOut } from "./array/fns/array";
const TrueT = require("./primitives/true");

const { canvas } = require("./canvas/canvas");
const Conversions = require("./conversions/conversions");

const { objectToString, deepEqual, keyEqual, valueEqual, findKeys } = require("./object/object");

const { nothing, just, maybe, either, list: monad_list, future, state } = require("./functional/monad");
const {
    headingToHTML,
    sanitize,
    verifyHeading1,
    verifyHeading2,
    verifyHeading3,
    markdownTableToJson,
} = require("./markdown/markdown.js");

const coinChange = require("./misc/coinChange");

const checks = { type: { isString, isEmptyString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf } };

const object = {
    filterOutKeysFromObject,
    filterInKeysFromObject,
};

const json = { jsonToCsv, detectCircularity, validateJsonAndConvertToCsv };

export {
    arrayMayGet,
    base64,
    BooleanT,
    canvas,
    checks,
    chunk,
    coinChange,
    Conversions,
    deepEqual,
    Default,
    defaultArray,
    detectCircularity,
    DirInfo,
    either,
    FalseT,
    filterIn,
    filterInKeysFromObject,
    filterInStream,
    filterOut,
    filterOutKeysFromObject,
    filterOutStream,
    findKeys,
    fs,
    future,
    generateCalendar,
    hash256,
    hash512,
    headingToHTML,
    htmlTableToMarkdown,
    htmlTableToMarkdownDOM,
    inplaceFilterIn,
    inplaceFilterOut,
    int,
    isArrayOf,
    isEmptyOrNullString,
    isEmptyString,
    isLinux,
    isMac,
    isPrimitive,
    isString,
    isUndefinedOrNull,
    isWindows,
    json,
    jsonToCsv,
    just,
    keyEqual,
    LinuxDirectoryNode,
    list,
    markdownTableToJson,
    maybe,
    median,
    monad_list,
    negint,
    None,
    nothing,
    NumberMaxHeap,
    NumberMinHeap,
    object,
    objectToString,
    Option,
    osname,
    platform,
    posint,
    randomArray,
    randomMatrix,
    readStream,
    resetArray,
    reverseSortedArray,
    rotateLeft,
    rotateRight,
    sanitize,
    Some,
    sortedArray,
    state,
    StringT,
    TrueT,
    validateJsonAndConvertToCsv,
    valueEqual,
    verifyHeading1,
    verifyHeading2,
    verifyHeading3,
    zeroNumberArray,
    zeroStringArray,
};

export type { Result, ErrorType, ValueType, Result2 };
