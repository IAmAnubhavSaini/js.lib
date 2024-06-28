import { base64 } from "./string/index.js";
import { canvas } from "./canvas";
import Conversions = require("./conversions");
import { fs } from "./node/index.js";
import { number } from "./heap/index.js";
declare const filterReduce: typeof import("./array/fns/list.js").filterReduce;
declare const foldl: typeof import("./array/fns/list.js").foldl;
declare const foldr: typeof import("./array/fns/list.js").foldr;
declare const take: typeof import("./array/fns/list.js").take;
declare const tail: typeof import("./array/fns/list.js").tail;
declare const head: typeof import("./array/fns/list.js").head;
import { defaultArray } from "./array/index.js";
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
import { objectToString } from "./object";
import { deepEqual } from "./object";
import { keyEqual } from "./object";
import { valueEqual } from "./object";
import { findKeys } from "./object";
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
export declare namespace array {
    export { defaultArray };
    export { median };
    export { randomArray };
    export { randomMatrix };
    export { resetArray };
    export { reverseSortedArray };
    export { rotateLeft };
    export { rotateRight };
    export { sortedArray };
    export { zeroNumberArray };
    export { zeroStringArray };
}
export declare namespace primitives {
    export { BooleanT };
    export { Default };
    export { FalseT };
    export { StringT };
    export { TrueT };
}
export declare namespace object {
    export { objectToString };
    export { deepEqual };
    export { keyEqual };
    export { valueEqual };
    export { findKeys };
}
export { base64, canvas, Conversions, fs };
