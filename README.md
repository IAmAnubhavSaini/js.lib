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
- base64
  - encode
  - decode
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
copyright 2024 AckRet
