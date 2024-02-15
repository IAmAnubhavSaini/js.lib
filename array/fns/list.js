/**
 * @param fn {function}
 * @param initValue {number}
 * @param list {number[]}
 * @return {*}
 */
function foldr(fn, initValue, list) {
    if (list.length === 0) {
        return initValue;
    }
    const [ c, ...rest ] = list;
    return fn(c, foldr(fn, initValue, rest));
}

module.exports = {
    foldr,
};

