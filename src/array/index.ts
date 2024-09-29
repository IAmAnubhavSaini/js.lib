const { filterReduce, foldl, foldr, take, tail, head } = require("./fns/list.js");
import {
    arrayToString,
    defaultArray,
    isArray,
    isArraylike,
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
    chunk
} from "./fns/array.js";

const list = { filterReduce, foldl, foldr, take, tail, head };

export {
    arrayToString,
    defaultArray,
    isArray,
    isArraylike,
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
    chunk,
    list,
};
