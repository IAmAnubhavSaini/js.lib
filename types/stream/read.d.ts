import { Result } from "../types/Result";
declare function readStream(stream: Iterable<string>, type?: "string" | "buffer"): Promise<Result<string>>;
export { readStream };
