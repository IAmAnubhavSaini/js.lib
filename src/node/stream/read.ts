import { Readable } from "stream";
import { ErrorType, Result, ValueType } from "../../types/Result";

async function readStream(stream: Readable, type: "string" | "buffer" = "string"): Promise<Result<string>> {
    if (typeof stream !== "object") {
        return { ok: false, error: "ERROR: stream should be an object!" } as ErrorType;
    }
    if (!/string|buffer/.test(type)) {
        return { ok: false, error: "ERROR: type could be string or buffer only!" } as ErrorType;
    }
    const array = [];
    for await (const chunk of stream) {
        array.push(chunk);
    }
    return {
        ok: true,
        result: [type === "string" ? array.join("") : Buffer.concat(array).toString()],
    } as ValueType<string>;
}

export { readStream };
