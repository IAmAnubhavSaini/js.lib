import * as fs from "./fs";
import { hash256, hash512 } from "./hash";
import { platform, osname, isLinux, isWindows, isMac } from "./info";
import { readStream } from "./stream/read";
export { fs, hash256, hash512, platform, osname, isLinux, isWindows, isMac, readStream };
