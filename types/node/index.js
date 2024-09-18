"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.negint = exports.posint = exports.int = exports.LinuxDirectoryNode = exports.readStream = exports.isMac = exports.isWindows = exports.isLinux = exports.osname = exports.platform = exports.hash512 = exports.hash256 = exports.DirInfo = exports.fs = void 0;
const fs = __importStar(require("./fs"));
exports.fs = fs;
const hash_1 = require("./hash");
Object.defineProperty(exports, "hash256", { enumerable: true, get: function () { return hash_1.hash256; } });
Object.defineProperty(exports, "hash512", { enumerable: true, get: function () { return hash_1.hash512; } });
const info_1 = require("./info");
Object.defineProperty(exports, "platform", { enumerable: true, get: function () { return info_1.platform; } });
Object.defineProperty(exports, "osname", { enumerable: true, get: function () { return info_1.osname; } });
Object.defineProperty(exports, "isLinux", { enumerable: true, get: function () { return info_1.isLinux; } });
Object.defineProperty(exports, "isWindows", { enumerable: true, get: function () { return info_1.isWindows; } });
Object.defineProperty(exports, "isMac", { enumerable: true, get: function () { return info_1.isMac; } });
const read_1 = require("./stream/read");
Object.defineProperty(exports, "readStream", { enumerable: true, get: function () { return read_1.readStream; } });
const directory_1 = require("./directory");
Object.defineProperty(exports, "LinuxDirectoryNode", { enumerable: true, get: function () { return directory_1.LinuxDirectoryNode; } });
const random_1 = require("./random");
Object.defineProperty(exports, "int", { enumerable: true, get: function () { return random_1.int; } });
Object.defineProperty(exports, "posint", { enumerable: true, get: function () { return random_1.posint; } });
Object.defineProperty(exports, "negint", { enumerable: true, get: function () { return random_1.negint; } });
const { DirInfo } = fs;
exports.DirInfo = DirInfo;
