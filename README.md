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

> @f0c1s/js.lib@0.0.13 cover
> npx nyc@latest npm run test | tee coverage.txt


> @f0c1s/js.lib@0.0.13 test
> ./node_modules/.bin/jasmine

Randomized with seed 47247
Started
..................................................................................................................


114 specs, 0 failures
Finished in 0.026 seconds
Randomized with seed 47247 (jasmine --random=true --seed=47247)
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   96.71 |    91.22 |    98.3 |   97.84 |                   
 js.lib            |     100 |      100 |     100 |     100 |                   
  object.js        |     100 |      100 |     100 |     100 |                   
 js.lib/array      |     100 |    81.81 |     100 |     100 |                   
  index.js         |     100 |    81.81 |     100 |     100 | 98-109            
 js.lib/array/fns  |   93.33 |       90 |     100 |   92.85 |                   
  list.js          |   93.33 |       90 |     100 |   92.85 | 43,57             
 js.lib/heap       |   91.89 |       75 |     100 |   97.14 |                   
  min.js           |   91.89 |       75 |     100 |   97.14 | 151               
 js.lib/node       |   91.93 |    95.65 |   66.66 |   94.91 |                   
  fs.js            |   91.93 |    95.65 |   66.66 |   94.91 | 65,98,108         
 js.lib/primitives |     100 |      100 |     100 |     100 |                   
  boolean.js       |     100 |      100 |     100 |     100 |                   
  default.js       |     100 |      100 |     100 |     100 |                   
  false.js         |     100 |      100 |     100 |     100 |                   
  string.js        |     100 |      100 |     100 |     100 |                   
  true.js          |     100 |      100 |     100 |     100 |                   
 js.lib/string/fns |     100 |    81.81 |     100 |     100 |                   
  base64.js        |     100 |    81.81 |     100 |     100 | 35,75             
-------------------|---------|----------|---------|---------|-------------------


```


## License

MIT 

copyright 2024 Anubhav Saini (iamanubhavsaini)
