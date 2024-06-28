export = Default;
declare class Default {
    static compareAscending(a: any, b: any): 0 | 1 | -1;
    static compareDescending(a: any, b: any): number;
    static compareAscendingAsNumbers(a: any, b: any): 0 | 1 | -1;
    static compareDescendingAsNumbers(a: any, b: any): number;
    static compareAscendingAsStrings(a: any, b: any): 0 | 1 | -1;
    static compareDescendingAsStrings(a: any, b: any): number;
    static equals(a: any, b: any): boolean;
    static equalsAsNumbers(a: any, b: any): boolean;
    static equalsAsStrings(a: any, b: any): boolean;
}
