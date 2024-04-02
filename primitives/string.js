class StringT{
    #value;
    #frequencyMap;
    #length;
    constructor(value) {
        if(typeof value !== "string") {
            return new StringT("StringT constructor ERROR: Wrong type!");
        }
        this.#value = value;
        this.#length = value.length;
        this.#frequencyMap = null;
    }

    get length() {
        return this.#length;
    }

    isAscii() {
        return /^[\x00-\x7F]*$/.test(this.#value);
    }

    isAlphabetic() {
        return /^[a-zA-Z]*$/.test(this.#value);
    }

    isNumeric() {
        return /^[0-9]*$/.test(this.#value);
    }

    isAlphaNumeric() {
        return /^[a-zA-Z0-9]*$/.test(this.#value);
    }

    isLowerCase() {
        return /^[a-z]*$/.test(this.#value);
    }

    isUpperCase() {
        return /^[A-Z]*$/.test(this.#value);
    }

    toLowerCase() {
        return new StringT(this.#value.toLowerCase());
    }

    toLocaleLowerCase() {
        return new StringT(this.#value.toLocaleLowerCase());
    }

    toUpperCase() {
        return new StringT(this.#value.toUpperCase());
    }

    toLocaleUpperCase() {
        return new StringT(this.#value.toLocaleUpperCase());
    }

    toString() {
        return this.#value;
    }

    toValue() {
        return this.#value;
    }

    toObject() {
        return {
            StringT: {
                value: this.#value,
                length: this.#length,
                isAscii: this.isAscii(),
                isAlphabetic: this.isAlphabetic(),
                isNumeric: this.isNumeric(),
                isAlphaNumeric: this.isAlphaNumeric(),
                isLowerCase: this.isLowerCase(),
                isUpperCase: this.isUpperCase(),
                isPalindrome: this.isPalindrome(),
            }
        };
    }

    isEqual(other) {
        return this.#length === other.length && this.toValue() === other.toValue();
    }

    firstN(n) {
        return new StringT(this.#value.substring(0, n));
    }

    firstNWithFill(n, fill = "_") {
        return new StringT(this.#value.substring(0, n).padEnd(n, fill));
    }

    generateFrequencyMap() {
        if(this.#frequencyMap) {
            return this.#frequencyMap;
        }

        const frequencyMap = {};
        for (let i = 0; i < this.#length; i++) {
            if (frequencyMap[this.#value[i]]) {
                frequencyMap[this.#value[i]]++;
            } else {
                frequencyMap[this.#value[i]] = 1;
            }
        }
        this.#frequencyMap = frequencyMap;
        return this.#frequencyMap;
    }

    frequency(char) {
        this.generateFrequencyMap();
        return this.#frequencyMap[char] || 0;
    }

    reverse() {
        return new StringT(this.#value.split("").reverse().join(""));
    }

    isPalindrome() {
        const reversed = this.#value.split("").reverse().join("");
        return this.#value === reversed;
    }

    padEnd(n, fill = "_") {
        return new StringT(this.#value.padEnd(n, fill));
    }

    padRight(n, fill = "_") {
        return this.padEnd(n, fill);
    }

    padStart(n, fill = "_") {
        return new StringT(this.#value.padStart(n, fill));
    }

    padLeft(n, fill = "_") {
        return this.padStart(n, fill);
    }

    concat(other) {
        if(!(other instanceof StringT)) {
            if(typeof other === "string") {
                other = new StringT(other);
            } else {
            return new StringT("StringT concat ERROR: Wrong type!");
            }
        }
        return new StringT(this.#value.concat(other));
    }

    append(other) {
        return this.concat(other);
    }

    prepend(other) {
        if(!(other instanceof StringT)) {
            if(typeof other === "string") {
                other = new StringT(other);
            } else {
                return new StringT("StringT prepend ERROR: Wrong type!");
            }
        }
        return new StringT(other.toValue().concat(this));
    }

}

module.exports = StringT;
