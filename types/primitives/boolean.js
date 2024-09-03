"use strict";
const TrueT = require("./true");
const FalseT = require("./false");
class BooleanT {
    #value;
    constructor(value) {
        this.#value = value ? new TrueT() : new FalseT();
    }
    toString() {
        return this.#value.toString();
    }
    toValue() {
        return this.#value.toValue();
    }
    isEqual(other) {
        return this.toValue() === other.toValue();
    }
}
module.exports = BooleanT;
