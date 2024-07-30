/**
 * coinChange generates change info based on tragets and denominations.
 * @param targets {number[]} List of positive numbers.
 * @param denominations {number[]} List of single coin values in decreasing order
 * @return {{target: number, change: string}[]}
 */
function coinChange(targets, denominations) {
    // just making sure that denominations are from high to low
    denominations.sort((a, b) => b - a);

    return targets
        .map((t) => {
            let change = denominations.map((_) => 0);
            let sum = 0;
            let i = 0;
            while (i < change.length) {
                if (sum + denominations[i] <= t) {
                    sum += denominations[i];
                    change[i]++;
                } else {
                    i++;
                }
            }
            return change;
        })
        .map((arr) =>
            arr
                .map((v, i) => (v > 0 ? `${denominations[i]}*${v}` : ""))
                .filter((i) => !!i)
                .join(" + "),
        )
        .map((str, i) => ({ target: targets[i], change: str }));
}

module.exports = coinChange;
