interface Option<T> {
    isSome(): this is Some<T>;
    isNone(): this is None;
}

class Some<T> implements Option<T> {
    constructor(public value: T) {}
    isSome(): this is Some<T> {
        return true;
    }

    isNone(): this is None {
        return false;
    }
}

class None implements Option<never> {
    isSome(): this is Some<never> {
        return false;
    }
    isNone(): this is None {
        return true;
    }
}

export { Some, None, Option };
