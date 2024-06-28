import { base64 } from "./string/index.js";
import { canvas } from "./canvas";
import Conversions = require("./conversions");
import { fs } from "./node/index.js";
import { number } from "./heap/index.js";
import { defaultArray } from "./array/index.js";
declare const filterReduce: typeof import("./array/fns/list.js").filterReduce;
declare const foldl: typeof import("./array/fns/list.js").foldl;
declare const foldr: typeof import("./array/fns/list.js").foldr;
declare const take: typeof import("./array/fns/list.js").take;
declare const tail: typeof import("./array/fns/list.js").tail;
declare const head: typeof import("./array/fns/list.js").head;
import { median } from "./array/index.js";
import { randomArray } from "./array/index.js";
import { randomMatrix } from "./array/index.js";
import { resetArray } from "./array/index.js";
import { reverseSortedArray } from "./array/index.js";
import { rotateLeft } from "./array/index.js";
import { rotateRight } from "./array/index.js";
import { sortedArray } from "./array/index.js";
import { zeroNumberArray } from "./array/index.js";
import { zeroStringArray } from "./array/index.js";
import BooleanT = require("./primitives/boolean");
import Default = require("./primitives/default");
import FalseT = require("./primitives/false");
import StringT = require("./primitives/string");
import TrueT = require("./primitives/true");
export declare namespace heap {
    export { number };
}
export declare namespace list {
    export { filterReduce };
    export { foldl };
    export { foldr };
    export { take };
    export { tail };
    export { head };
}
export declare namespace primitives {
    export { BooleanT };
    export { Default };
    export { FalseT };
    export { StringT };
    export { TrueT };
}
export { base64, canvas, Conversions, fs, defaultArray, median, randomArray, randomMatrix, resetArray, reverseSortedArray, rotateLeft, rotateRight, sortedArray, zeroNumberArray, zeroStringArray };
