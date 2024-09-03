import { Readable } from "stream";
import { readStream } from "./read";
import { ValueType } from "../../types/Result";

describe("readStream", () => {
    it("should return a string with the content of the stream", async () => {
        const readable = new Readable();
        const chunks: Buffer[] = [];
        // readable.on("data", (chunk) => chunks.push(chunk));
        // readable.on("end", () => {
        //     const result = Buffer.concat(chunks).toString();
        //     expect(result).toBe("Hello World!");
        // });
        readable.push("Hello ");
        readable.push("World!");
        readable.push(null);
        const expected = "Hello World!";
        const { ok, result } = (await readStream(readable)) as ValueType<string>;
        expect(ok).toBeTrue();
        expect(result[0]).toEqual(expected);
    });
});
