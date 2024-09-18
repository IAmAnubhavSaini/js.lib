import * as fs from "./fs";
import { hash256, hash512 } from "./hash";
import { platform, osname, isLinux, isWindows, isMac } from "./info";
import { readStream } from "./stream/read";
import { LinuxDirectoryNode } from "./directory";
import { int, posint, negint } from "./random";

const { DirInfo } = fs;

export {
    fs,
    DirInfo,
    hash256,
    hash512,
    platform,
    osname,
    isLinux,
    isWindows,
    isMac,
    readStream,
    LinuxDirectoryNode,
    int,
    posint,
    negint,
};
