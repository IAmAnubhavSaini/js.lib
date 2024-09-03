/**
 * foldr :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
declare function foldr(fn: any, initValue: any, list: any): any;
/**
 * foldl :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
declare function foldl(fn: any, initValue: any, list: any): any;
/**
 * take :: number -> [a] -> [a]
 * @param n {number}
 * @param list {*[]}
 * @return {*[]}
 */
declare function take(n: any, list: any): any;
/**
 * takeWhile :: (a -> boolean) -> [a] -> [a]
 * @param fn {function}
 * @param list {*[]}
 * @return {*[]}
 */
declare function takeWhile(fn: any, list: any): any;
/**
 * filterReduce :: (a -> boolean) -> (b -> a -> b) -> b -> [a] -> b
 * @param filterFn {(v, i, a) => boolean}
 * @param reduceFn {(acc, cur, i, a) => cur}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
declare function filterReduce(filterFn: any, reduceFn: any, initValue: any, list: any): any;
/**
 * head returns the head of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
declare function head(list: any, n?: number): any[];
/**
 * tail returns the tail of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
declare function tail(list: any, n?: number): any[];
export { filterReduce, foldl, foldr, take, takeWhile, head, tail };
