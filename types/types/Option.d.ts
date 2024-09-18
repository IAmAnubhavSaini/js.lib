interface Option<T> {
    isSome(): this is Some<T>;
    isNone(): this is None;
}
declare class Some<T> implements Option<T> {
    value: T;
    constructor(value: T);
    isSome(): this is Some<T>;
    isNone(): this is None;
}
declare class None implements Option<never> {
    isSome(): this is Some<never>;
    isNone(): this is None;
}
export { Some, None, Option };
