"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readStream = readStream;
async function readStream(stream, type = "string") {
    if (typeof stream !== "object") {
        return { ok: false, error: "ERROR: stream should be an object!" };
    }
    if (!/string|buffer/.test(type)) {
        return { ok: false, error: "ERROR: type could be string or buffer only!" };
    }
    const array = [];
    for await (const chunk of stream) {
        array.push(chunk);
    }
    return {
        ok: true,
        result: [type === "string" ? array.join("") : Buffer.concat(array).toString()],
    };
}
