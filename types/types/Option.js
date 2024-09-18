"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = exports.Some = void 0;
class Some {
    value;
    constructor(value) {
        this.value = value;
    }
    isSome() {
        return true;
    }
    isNone() {
        return false;
    }
}
exports.Some = Some;
class None {
    isSome() {
        return false;
    }
    isNone() {
        return true;
    }
}
exports.None = None;
