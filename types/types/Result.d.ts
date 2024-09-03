type ValueType<T> = {
    ok: true;
    result: T[];
};
type ErrorType = {
    ok: false;
    error: string;
};
type Result<T> = ValueType<T> | ErrorType;
export type { Result, ValueType, ErrorType };
