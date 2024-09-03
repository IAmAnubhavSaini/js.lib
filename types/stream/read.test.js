"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
describe("readStream", () => {
    it("should return a string with the content of the stream", async () => {
        const readable = new stream_1.Readable();
        const chunks = [];
        readable.on("data", (chunk) => chunks.push(chunk));
        readable.on("end", () => {
            const result = Buffer.concat(chunks).toString();
            expect(result).toBe("Hello World!");
        });
        readable.push("Hello ");
        readable.push("World!");
        readable.push(null);
    });
});
