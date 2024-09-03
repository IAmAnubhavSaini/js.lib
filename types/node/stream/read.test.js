"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const read_1 = require("./read");
describe("readStream", () => {
    it("should return a string with the content of the stream", async () => {
        const readable = new stream_1.Readable();
        const chunks = [];
        // readable.on("data", (chunk) => chunks.push(chunk));
        // readable.on("end", () => {
        //     const result = Buffer.concat(chunks).toString();
        //     expect(result).toBe("Hello World!");
        // });
        readable.push("Hello ");
        readable.push("World!");
        readable.push(null);
        const expected = "Hello World!";
        const { ok, result } = (await (0, read_1.readStream)(readable));
        expect(ok).toBeTrue();
        expect(result[0]).toEqual(expected);
    });
});
