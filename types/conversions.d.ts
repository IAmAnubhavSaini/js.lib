export = Conversions;
declare class Conversions {
    static inches(value: any): {
        toCentiMeters(): number;
        toFeet(): number;
    };
    static miles(value: any): {
        toFeet(): number;
        toMeters(): number;
    };
    static meters(value: any): {
        toInches(): number;
        toCentiMeters(): number;
    };
}
