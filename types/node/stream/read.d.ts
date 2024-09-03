import { Readable } from "stream";
import { Result } from "../../types/Result";
declare function readStream(stream: Readable, type?: "string" | "buffer"): Promise<Result<string>>;
export { readStream };
