export = StringT;
declare class StringT {
    constructor(value: any);
    get length(): number;
    isAscii(): boolean;
    isAlphabetic(): boolean;
    isNumeric(): boolean;
    isAlphaNumeric(): boolean;
    isLowerCase(): boolean;
    isUpperCase(): boolean;
    toLowerCase(): StringT;
    toLocaleLowerCase(): StringT;
    toUpperCase(): StringT;
    toLocaleUpperCase(): StringT;
    toString(): string;
    toValue(): string;
    toObject(): {
        StringT: {
            value: string;
            length: number;
            isAscii: boolean;
            isAlphabetic: boolean;
            isNumeric: boolean;
            isAlphaNumeric: boolean;
            isLowerCase: boolean;
            isUpperCase: boolean;
            isPalindrome: boolean;
        };
    };
    isEqual(other: any): boolean;
    firstN(n: any): StringT;
    firstNWithFill(n: any, fill?: string): StringT;
    generateFrequencyMap(): any;
    frequency(char: any): any;
    reverse(): StringT;
    isPalindrome(): boolean;
    padEnd(n: any, fill?: string): StringT;
    padRight(n: any, fill?: string): StringT;
    padStart(n: any, fill?: string): StringT;
    padLeft(n: any, fill?: string): StringT;
    concat(other: any): StringT;
    append(other: any): StringT;
    prepend(other: any): StringT;
    #private;
}
