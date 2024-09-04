declare class LinuxDirectoryNode {
    path: string;
    directories: Array<LinuxDirectoryNode>;
    files: Array<string>;
    constructor(path: string, depth?: number);
    toEqual(other: LinuxDirectoryNode): boolean;
    toString(): string;
}
export { LinuxDirectoryNode };
