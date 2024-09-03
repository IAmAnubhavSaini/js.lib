"use strict";
class TrueT {
    #value;
    constructor() {
        this.#value = true;
    }
    toString() {
        return "true";
    }
    toValue() {
        return this.#value;
    }
}
module.exports = TrueT;
