export = BooleanT;
declare class BooleanT {
    constructor(value: any);
    toString(): string;
    toValue(): boolean;
    isEqual(other: any): boolean;
    #private;
}
