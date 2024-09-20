"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOutKeysFromObject = filterOutKeysFromObject;
exports.filterInKeysFromObject = filterInKeysFromObject;
function filterOutKeysFromObject(obj, keys) {
    return Object.keys(obj)
        .filter((k) => !keys.includes(k))
        .reduce((a, c) => {
        a[c] = obj[c];
        return a;
    }, {});
}
function filterInKeysFromObject(obj, keys) {
    return Object.keys(obj)
        .filter((k) => keys.includes(k))
        .reduce((a, c) => {
        a[c] = obj[c];
        return a;
    }, {});
}
