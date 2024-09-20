declare function filterOutKeysFromObject(obj: {
    [k: string]: any;
}, keys: Array<string>): object;
declare function filterInKeysFromObject(obj: {
    [k: string]: any;
}, keys: Array<string>): object;
export { filterOutKeysFromObject, filterInKeysFromObject };
