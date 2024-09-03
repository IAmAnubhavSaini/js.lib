# js.lib

## Types

This library will be moving to a `{ok: true|false, result: *[], error: ""}` type for all functions possible.

```typescript
import { Result, ValueType, ErrorType } from "@ackret/js.lib";

// You can use these types as shown in following example:
function mayDivide(a, b): Result<number> {
    if (b !== 0) {
        return { ok: true, result: [a / b] } as ValueType<number>;
    } else {
        return { ok: false, error: "ERROR: Cannot divide by 0." } as ErrorType;
    }
}
```

## Features

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
    -   info
        -   platform
        -   osname
        -   isLinux
        -   isWindows
        -   isMac
    -   hash
        -   hash256
        -   hash512
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

[Read up on the implemnted monads here](./src/functional/monad.md)

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

## License

[MIT](./LICENSE)

Copyright (&copy;) 2024 Anubhav Saini

Copyright (&copy;) 2024 Ackret Solutions
