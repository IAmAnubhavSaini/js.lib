# js.lib

## Features

-   Result<T>
-   ValueType<T>
-   ErrorType
-   Result2<T, E>
-   Option<T>
-   Some<T>
-   None
-   array
    -   defaultArray
    -   median
    -   randomArray
    -   randomMatrix
    -   resetArray
    -   reverseSortedArray
    -   rotateLeft
    -   rotateRight
    -   sortedArray
    -   zeroNumberArray
    -   zeroStringArray
    -   arrayMayGet<T>
-   checks
    -   isString
    -   isEmptyString
    -   isEmptyOrNullString
    -   isUndefinedOrNull
    -   isPrimitive
    -   isArrayOf
-   list
    -   filterReduce
    -   foldl
    -   foldr
    -   take
    -   takeWhile
-   heap
    -   number
        -   MinHeap
-   node
    -   fs
        -   processFiles
        -   readDirectorySync
        -   readFileSync
        -   writeFileSync
        -   readDirectorySync
        -   processFiles
        -   windowsRoot
        -   linuxRoot
        -   macRoot
        -   LinuxDirectoryNode
        -   DirInfo
    -   info
        -   platform
        -   osname
        -   isLinux
        -   isWindows
        -   isMac
    -   hash
        -   hash256
        -   hash512
-   markdown
    -   headingToHTML
    -   sanitize
    -   verifyHeading1
    -   verifyHeading2
    -   verifyHeading3
    -   markdownTableToJson
-   primitives
    -   boolean: class BooleanT
    -   default: class Default
    -   false: class FalseT
    -   string: class StringT
    -   true: class TrueT
-   canvas
    -   Point2d
    -   Circle
    -   Square
    -   Rectangle
-   Conversion
-   string
    -   base64
        -   BASE_64_DEFAULT_ALPHABET
        -   BASE_64_DEFAULT_PAD
        -   codePointFromBinaryString
        -   decode
        -   encode
        -   tokenize
        -   URL_SAFE_BASE_64_ALPHABET
    -   hex
        -   fromAscii
    -   ascii
        -   fromHex
    -   deleteChar
    -   deleteStr
    -   toNumber
    -   compareEnds
    -   containsChar
    -   containsStr
    -   iterator
        -   genChar
        -   genCode
        -   rangeAscii
        -   rangeUnicode
    -   runes
        -   runes
        -   verifyBasicMultilingualPlane
        -   nextRune
        -   previousRune
-   monad
    -   either
    -   future
    -   just
    -   list
    -   maybe
    -   nothing
    -   state
-   object
-   filterOutKeysFromObjects
-   filterInKeysFromObjects
-   json
-   jsonToCsv
-   detectCircularity
-   validateJsonAndConvertToCsv

## Usage

```bash
npm install @ackret/js.lib
```

```javascript
const { fs } = require("@ackret/js.lib");

// log all files with full path
fs.processFiles({ directoryPath: "src", fileProcessorFn: console.log });
```

## Coverage

```bash

# to cover and generate text output
npm run cover
# to cover and generate html output
npm run cover-html

```

## Development

```bash
npm install --save-dev jasmine@latest prettier@latest typescript@latest @types/jasmine@latest @types/node@latest

npm run build && npm run test
```

## License

[MIT](./LICENSE)

Copyright (&copy;) 2024 Anubhav Saini

Copyright (&copy;) 2024 Ackret Solutions
