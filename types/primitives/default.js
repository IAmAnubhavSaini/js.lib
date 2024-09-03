"use strict";
class Default {
    static compareAscending(a, b) {
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        return 0;
    }
    static compareDescending(a, b) {
        return Default.compareAscending(a, b) * -1;
    }
    static compareAscendingAsNumbers(a, b) {
        const c = Number(a);
        const d = Number(b);
        return Default.compareAscending(c, d);
    }
    static compareDescendingAsNumbers(a, b) {
        const c = Number(a);
        const d = Number(b);
        return Default.compareDescending(c, d);
    }
    static compareAscendingAsStrings(a, b) {
        const c = String(a);
        const d = String(b);
        return Default.compareAscending(c, d);
    }
    static compareDescendingAsStrings(a, b) {
        const c = String(a);
        const d = String(b);
        return Default.compareDescending(c, d);
    }
    static equals(a, b) {
        return a === b;
    }
    static equalsAsNumbers(a, b) {
        return Number(a) === Number(b);
    }
    static equalsAsStrings(a, b) {
        return String(a) === String(b);
    }
}
module.exports = Default;
