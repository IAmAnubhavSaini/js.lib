/**
 * foldr :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {T}
 * @param list {T[]}
 * @return {T}
 */
function foldr<T>(fn: (c: T, fn: any) => T, initValue: T, list: T[]): T {
    if (list.length === 0) {
        return initValue;
    }
    const [c, ...rest] = list;
    return fn(c, foldr(fn, initValue, rest));
}

/**
 * foldl :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
function foldl(fn, initValue, list) {
    if (list.length === 0) {
        return initValue;
    }
    const [c, ...rest] = list;
    return foldl(fn, fn(initValue, c), rest);
}

/**
 * take :: number -> [a] -> [a]
 * @param n {number}
 * @param list {*[]}
 * @return {*[]}
 */
function take(n, list) {
    if (n === 0 || list.length === 0) {
        return [];
    }
    if (n > list.length) {
        return list;
    }
    const [c, ...rest] = list;
    return [c, ...take(n - 1, rest)];
}

/**
 * takeWhile :: (a -> boolean) -> [a] -> [a]
 * @param fn {function}
 * @param list {*[]}
 * @return {*[]}
 */
function takeWhile(fn, list) {
    if (list.length === 0) {
        return [];
    }
    const [c, ...rest] = list;
    if (fn(c)) {
        return [c, ...takeWhile(fn, rest)];
    }
    return [];
}

/**
 * * filterReduce :: (a -> boolean) -> (b -> a -> b) -> b -> [a] -> b
 * Applies a filter function and a reduce function to a list, returning the reduced value.
 *
 * @template T - The type of elements in the list.
 * @param {(v, i, a) => boolean} filterFn - The filter function to apply to the list.
 * @param {(acc, cur, i, a) => cur} reduceFn - The reduce function to apply to the filtered list.
 * @param {T} initValue - The initial value for the reduce operation.
 * @param {T[]} list - The list of elements to filter and reduce.
 * @returns {T} - The reduced value.
 */
function filterReduce<T>(
    filterFn: (v: T, i: number, a: T[]) => boolean,
    reduceFn: (acc: T, cur: T, i: number, a: T[]) => T,
    initValue: T,
    list: T[],
): T {
    return list.filter(filterFn).reduce(reduceFn, initValue);
}

/**
 * head returns the head of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
function head(list, n = 10) {
    if (!Array.isArray(list)) return [];
    n = Math.min(n, list.length);
    return list.slice(0, n);
}

/**
 * tail returns the tail of a list
 * @param list {T[]}
 * @param n {number}
 * @returns {T[]}
 */
function tail<T>(list: T[], n: number = 10): T[] {
    if (!Array.isArray(list)) {
        return [];
    }
    n = Math.max(0, list.length - n);
    return list.slice(n);
}

export { filterReduce, foldl, foldr, take, takeWhile, head, tail };
