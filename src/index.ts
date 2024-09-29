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
} = require("./array/index.js");
const { NumberMinHeap, NumberMaxHeap } = require("./heap/index.js");

const BooleanT = require("./primitives/boolean");
const Default = require("./primitives/default");
const FalseT = require("./primitives/false");
import StringT from "./primitives/string";
import { htmlTableToMarkdown, htmlTableToMarkdownDOM } from "./markdown/markdown";
import { generateCalendar } from "./misc/calendar";
import { filterIn, filterOut, inplaceFilterIn, inplaceFilterOut } from "./array/fns/array";
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
    base64,
    canvas,
    Conversions,
    fs,
    DirInfo,
    hash256,
    hash512,
    platform,
    osname,
    isLinux,
    isWindows,
    isMac,
    LinuxDirectoryNode,
    int,
    posint,
    negint,
    readStream,
    NumberMinHeap,
    NumberMaxHeap,
    arrayMayGet,
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
    filterOut,
    filterIn,
    inplaceFilterOut,
    inplaceFilterIn,
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
    markdownTableToJson,
    htmlTableToMarkdownDOM,
    htmlTableToMarkdown,
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
    checks,
    isString,
    isEmptyString,
    isEmptyOrNullString,
    isUndefinedOrNull,
    isPrimitive,
    isArrayOf,
    Option,
    Some,
    None,
    object,
    filterOutKeysFromObject,
    filterInKeysFromObject,
    json,
    jsonToCsv,
    detectCircularity,
    validateJsonAndConvertToCsv,
    generateCalendar,
};

export type { Result, ErrorType, ValueType, Result2 };
