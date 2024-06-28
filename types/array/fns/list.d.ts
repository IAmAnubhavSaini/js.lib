/**
 * filterReduce :: (a -> boolean) -> (b -> a -> b) -> b -> [a] -> b
 * @param filterFn {(v, i, a) => boolean}
 * @param reduceFn {(acc, cur, i, a) => cur}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
export function filterReduce(filterFn: (v: any, i: any, a: any) => boolean, reduceFn: (acc: any, cur: any, i: any, a: any) => any, initValue: any, list: any[]): any;
/**
 * foldl :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
export function foldl(fn: Function, initValue: any, list: any[]): any;
/**
 * foldr :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
export function foldr(fn: Function, initValue: any, list: any[]): any;
/**
 * take :: number -> [a] -> [a]
 * @param n {number}
 * @param list {*[]}
 * @return {*[]}
 */
export function take(n: number, list: any[]): any[];
/**
 * takeWhile :: (a -> boolean) -> [a] -> [a]
 * @param fn {function}
 * @param list {*[]}
 * @return {*[]}
 */
export function takeWhile(fn: Function, list: any[]): any[];
/**
 * head returns the head of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
export function head(list: any[], n?: number): any[];
/**
 * tail returns the tail of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
export function tail(list: any[], n?: number): any[];
