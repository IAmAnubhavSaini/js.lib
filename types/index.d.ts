import { fs, DirInfo, hash256, hash512, platform, osname, isLinux, isWindows, isMac, readStream, LinuxDirectoryNode, int, posint, negint } from "./node/index";
import { Result, ErrorType, ValueType, Result2 } from "./types/Result";
import { Option, Some, None } from "./types/Option";
import { isString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf, isEmptyString } from "./checks/type";
import { filterOutKeysFromObject, filterInKeysFromObject } from "./object/filter";
import { jsonToCsv, detectCircularity, validateJsonAndConvertToCsv } from "./json";
declare const base64: any;
declare const defaultArray: any, list: any, median: any, randomArray: any, randomMatrix: any, resetArray: any, reverseSortedArray: any, rotateLeft: any, rotateRight: any, sortedArray: any, zeroNumberArray: any, zeroStringArray: any, arrayMayGet: any, chunk: any;
declare const NumberMinHeap: any, NumberMaxHeap: any;
declare const BooleanT: any;
declare const Default: any;
declare const FalseT: any;
import StringT from "./primitives/string";
import { htmlTableToMarkdown, htmlTableToMarkdownDOM } from "./markdown/markdown";
import { generateCalendar } from "./misc/calendar";
import { filterIn, filterInStream, filterOut, filterOutStream, inplaceFilterIn, inplaceFilterOut } from "./array/fns/array";
declare const TrueT: any;
declare const canvas: any;
declare const Conversions: any;
declare const objectToString: any, deepEqual: any, keyEqual: any, valueEqual: any, findKeys: any;
declare const nothing: any, just: any, maybe: any, either: any, monad_list: any, future: any, state: any;
declare const headingToHTML: any, sanitize: any, verifyHeading1: any, verifyHeading2: any, verifyHeading3: any, markdownTableToJson: any;
declare const coinChange: any;
declare const checks: {
    type: {
        isString: typeof isString;
        isEmptyString: typeof isEmptyString;
        isEmptyOrNullString: typeof isEmptyOrNullString;
        isUndefinedOrNull: typeof isUndefinedOrNull;
        isPrimitive: typeof isPrimitive;
        isArrayOf: typeof isArrayOf;
    };
};
declare const object: {
    filterOutKeysFromObject: typeof filterOutKeysFromObject;
    filterInKeysFromObject: typeof filterInKeysFromObject;
};
declare const json: {
    jsonToCsv: typeof jsonToCsv;
    detectCircularity: typeof detectCircularity;
    validateJsonAndConvertToCsv: typeof validateJsonAndConvertToCsv;
};
export { arrayMayGet, base64, BooleanT, canvas, checks, chunk, coinChange, Conversions, deepEqual, Default, defaultArray, detectCircularity, DirInfo, either, FalseT, filterIn, filterInKeysFromObject, filterInStream, filterOut, filterOutKeysFromObject, filterOutStream, findKeys, fs, future, generateCalendar, hash256, hash512, headingToHTML, htmlTableToMarkdown, htmlTableToMarkdownDOM, inplaceFilterIn, inplaceFilterOut, int, isArrayOf, isEmptyOrNullString, isEmptyString, isLinux, isMac, isPrimitive, isString, isUndefinedOrNull, isWindows, json, jsonToCsv, just, keyEqual, LinuxDirectoryNode, list, markdownTableToJson, maybe, median, monad_list, negint, None, nothing, NumberMaxHeap, NumberMinHeap, object, objectToString, Option, osname, platform, posint, randomArray, randomMatrix, readStream, resetArray, reverseSortedArray, rotateLeft, rotateRight, sanitize, Some, sortedArray, state, StringT, TrueT, validateJsonAndConvertToCsv, valueEqual, verifyHeading1, verifyHeading2, verifyHeading3, zeroNumberArray, zeroStringArray, };
export type { Result, ErrorType, ValueType, Result2 };
