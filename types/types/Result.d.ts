type ValueType<T> = {
    ok: true;
    result: T[];
};
type ErrorType = {
    ok: false;
    error: string;
};
type Result<T> = ValueType<T> | ErrorType;
type Result2<T, E> = {
    ok: Boolean;
    result?: Array<T>;
    errors?: Array<E>;
};
export type { Result, ValueType, ErrorType, Result2 };
