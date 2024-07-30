export = coinChange;
/**
 * coinChange generates change info based on tragets and denominations.
 * @param targets {number[]} List of positive numbers.
 * @param denominations {number[]} List of single coin values in decreasing order
 * @return {{target: number, change: string}[]}
 */
declare function coinChange(targets: number[], denominations: number[]): {
    target: number;
    change: string;
}[];
