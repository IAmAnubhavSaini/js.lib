# js.lib

## Features

- array
  - defaultArray
  - median
  - randomArray
  - randomMatrix
  - resetArray
  - reverseSortedArray
  - rotateLeft
  - rotateRight
  - sortedArray
  - zeroNumberArray
  - zeroStringArray
- list
  - filterReduce
  - foldl
  - foldr
  - take
  - takeWhile
- heap
  - number
    - MinHeap
- node
  - fs
    - processFiles
    - readDirectorySync
    - readFileSync
    - writeFileSync
- primitives
  - boolean: class BooleanT
  - default: class Default
  - false: class FalseT
  - string: class StringT
  - true: class TrueT
- canvas
  - Point2d
  - Circle
  - Square
  - Rectangle
- Conversion
- string
  - base64
    - BASE_64_DEFAULT_ALPHABET
    - BASE_64_DEFAULT_PAD
    - codePointFromBinaryString
    - decode
    - encode
    - tokenize
    - URL_SAFE_BASE_64_ALPHABET
  - hex
    - fromAscii
  - ascii
    - fromHex
  - deleteChar
  - deleteStr
  - toNumber
  - compareEnds
  - containsChar
  - containsStr
  - genChar
  - genCode
  - runes
  - verifyBasicMultilingualPlane

## Usage

```bash
npm install @ackret/js.lib
```

```javascript
const { readFileSync, writeFileSync } = require("@ackret/js.lib/src/node/fs");
```

## Coverage

```bash

# to cover and generate text output
npm run cover
# to cover and generate html output
npm run cover-html

```

## License

MIT

copyright 2024 Anubhav Saini (iamanubhavsaini)
copyright 2024 ackret
