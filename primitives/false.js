class FalseT {
    #value;

    constructor() {
        this.#value = false;
    }

    toString() {
        return "false";
    }

    toValue() {
        return this.#value;
    }
}

module.exports = FalseT;
