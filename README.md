# js.lib

## Features

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
    - readFileSync
    - writeFileSync
- primitives
  - string: class StringT
  - boolean: class BooleanT
  - false: class FalseT
  - true: class TrueT
  - default: class Default
- canvas
  - Point2d
  - Circle
  - Square
  - Rectangle
- Conversion
  

## Usage

```bash
npm install @f0c1s/js.lib
```

```javascript
const {readFileSync, writeFileSync} = require("@f0c1s/js.lib/node/fs");

```

## Coverage

```bash

# to cover and generate text output
npm run cover
# to cover and generate html output
npm run cover-html

```

Refer to [coverage.txt](./coverage.txt)

```bash
npm run cover

> @f0c1s/js.lib@0.0.8 cover
> npx nyc@latest npm run test | tee coverage.txt


> @f0c1s/js.lib@0.0.8 test
> ./node_modules/.bin/jasmine

Randomized with seed 74332
Started
................................................................................................


96 specs, 0 failures
Finished in 0.027 seconds
Randomized with seed 74332 (jasmine --random=true --seed=74332)
-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |   96.88 |    91.48 |     100 |   97.52 |                   
 array/fns   |   93.33 |       90 |     100 |   92.85 |                   
  list.js    |   93.33 |       90 |     100 |   92.85 | 43,57             
 heap        |   91.89 |       75 |     100 |   97.14 |                   
  min.js     |   91.89 |       75 |     100 |   97.14 | 151               
 node        |   94.73 |    95.45 |     100 |   94.64 |                   
  fs.js      |   94.73 |    95.45 |     100 |   94.64 | 64,97,107         
 primitives  |     100 |      100 |     100 |     100 |                   
  boolean.js |     100 |      100 |     100 |     100 |                   
  default.js |     100 |      100 |     100 |     100 |                   
  false.js   |     100 |      100 |     100 |     100 |                   
  string.js  |     100 |      100 |     100 |     100 |                   
  true.js    |     100 |      100 |     100 |     100 |                   
 string/fns  |     100 |    81.81 |     100 |     100 |                   
  base64.js  |     100 |    81.81 |     100 |     100 | 35,75             
-------------|---------|----------|---------|---------|-------------------

```


## License

MIT 

copyright 2024 Anubhav Saini (iamanubhavsaini)
