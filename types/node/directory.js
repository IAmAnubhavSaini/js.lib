"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinuxDirectoryNode = void 0;
const fs_1 = require("./fs");
class LinuxDirectoryNode {
    path;
    directories;
    files;
    constructor(path, depth = 0) {
        this.path = path;
        this.directories = [];
        this.files = [];
        if (depth > 0) {
            const red = (0, fs_1.readDirectorySync)(path);
            if (!red.error) {
                this.directories = red.content.directories.map((d) => {
                    let newPath = this.path + "/" + d;
                    if (this.path === "/") {
                        newPath = this.path + d;
                    }
                    return new LinuxDirectoryNode(newPath, depth - 1);
                });
                this.files = red.content.files.map((f) => {
                    let newPath = this.path + "/" + f;
                    if (this.path === "/") {
                        newPath = this.path + f;
                    }
                    return newPath;
                });
            }
        }
    }
    toEqual(other) {
        return (this.path === other.path &&
            this.directories.length === other.directories.length &&
            this.files.length === other.files.length &&
            this.directories.map((d) => d.path).join("") === other.directories.map((d) => d.path).join("") &&
            this.files.join("") === other.files.join(""));
    }
    toString() {
        return JSON.stringify({ path: this.path, directories: this.directories.sort(), files: this.files.sort() });
    }
}
exports.LinuxDirectoryNode = LinuxDirectoryNode;
