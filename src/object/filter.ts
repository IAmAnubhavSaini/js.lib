function filterOutKeysFromObject(obj: { [k: string]: any }, keys: Array<string>): object {
    return Object.keys(obj)
        .filter((k) => !keys.includes(k))
        .reduce((a, c: string) => {
            a[c] = obj[c];
            return a;
        }, {} as any);
}

function filterInKeysFromObject(obj: { [k: string]: any }, keys: Array<string>): object {
    return Object.keys(obj)
        .filter((k) => keys.includes(k))
        .reduce((a, c: string) => {
            a[c] = obj[c];
            return a;
        }, {} as any);
}

export { filterOutKeysFromObject, filterInKeysFromObject };
