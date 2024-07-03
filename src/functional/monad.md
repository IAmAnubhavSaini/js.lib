# Monads in JavaScript

## Just Monad Examples

The `just` monad represents computations which may contain a value. It is used to handle computations that are expected to succeed and return a value. Here are four examples of using the `just` monad:

```javascript
const { monad } = require("@ackret/js.lib");
```

### Example 1: Simple Value Wrapping

```javascript
const { just } = monad;

const value = just(5);
console.log(value.value); // Outputs: 5
```

### Example 2: Mapping Over a Just Monad

```javascript
const { just } = monad;

const value = just(5);
const newValue = value.map((x) => x * 2);
console.log(newValue.value); // Outputs: 10
```

Here, the `map` function is used to apply a transformation to the value contained within the `just` monad.

### Example 3: Chaining Operations with FlatMap

```javascript
const { just } = monad;

const value = just(5);
const result = value.flatMap((x) => just(x + 5)).flatMap((x) => just(x * 2));
console.log(result.value()); // Outputs: 20
```

### Example 4: Combining Just Monads

```javascript
const { just } = monad;

const value1 = just(5);
const value2 = just(10);
const combinedValue = value1.flatMap((x) => value2.map((y) => x + y));
console.log(combinedValue.value); // Outputs: 15
```

In this example, two `just` monads are combined to produce a new value, demonstrating how monads can be composed together.

## Nothing monad examples

The `nothing` monad represents the absence of a value in computations that might fail or result in no value. It is often used in functional programming to handle cases where operations do not succeed, without throwing exceptions. Here are some examples of using the `nothing` monad:

### Example 1: Creating a Nothing Monad

```javascript
const { nothing } = monad;

const noValue = nothing();
console.log(noValue.value); // Outputs: undefined
```

This example demonstrates how to create a `nothing` monad instance. The `isNothing` method checks if the monad indeed represents a lack of value.

### Example 2: Mapping Over a Nothing Monad

```javascript
const { nothing } = monad;

const noValue = nothing(2);
const result = noValue.map((x) => x * 2);
console.log(result.value); // Outputs: 2 // the original value passed to nothing.
```

Mapping over a `nothing` monad does not perform any operation and returns another `nothing` monad, preserving the absence of value.

### Example 3: Chaining Operations with FlatMap

```javascript
const { nothing } = monad;

const noValue = nothing();
const result = noValue.flatMap(() => nothing());
console.log(result.value); // Outputs: undefined
```

Chaining operations with `flatMap` on a `nothing` monad will always result in a `nothing` monad, indicating the continuation of the absence of value.

### Example 4: Combining Just and Nothing Monads

```javascript
const { just, nothing } = monad;

const value = just(5);
const noValue = nothing();
const combinedResult = value.flatMap((x) => noValue.map(() => x + 5));
console.log(combinedResult.value); // Outputs: undefined
```

When combining `just` and `nothing` monads, if any operation results in a `nothing` monad, the entire computation chain results in a `nothing` monad, demonstrating the propagation of the absence of value through the chain.

## Maybe

```javascript
const { maybe } = monad;

m = maybe(5).map((x) => x * x);
// { map: [Function: map], flatMap: [Function: flatMap], value: 25 }

m = maybe(null).map((x) => x * x);
// { map: [Function: map], flatMap: [Function: flatMap], value: null }

m = maybe(5)
  .map((x) => x * x)
  .map((x) => x * x);
// { map: [Function: map], flatMap: [Function: flatMap], value: 625 }

m = maybe(5)
  .map((x) => x * x)
  .flatMap((x) => x * x);
// 625
```

## List

```javascript
const { list } = monad;

l = list([1, 2, 3, 4, 5]).map((x) => x * x);
// { map: [Function: map], flatMap: [Function: flatMap], value: [ 1, 4, 9, 16, 25 ] }

l = list([1, 2, 3, 4, 5])
  .flatMap((x) => list([x, x * x]))
  .flatMap((x) => x.value);
// { map: [Function: map], flatMap: [Function: flatMap], value: [ 1, 1, 2, 4, 3, 9, 4, 16, 5, 25 ] }

l = list([1, 2, 3, 4, 5])
  .map((x) => x * x)
  .map((x) => x * x);
// { map: [Function: map], flatMap: [Function: flatMap], value: [ 1, 16, 81, 256, 625 ] }

l = list([1, 2, 3, 4, 5])
  .map((x) => x * x)
  .flatMap((x) => list(x * x));
// { map: [Function: map], flatMap: [Function: flatMap], value: [ 1, 16, 81, 256, 625 ] }

l = list([1, 2, 3, 4, 5])
  .flatMap((x) => list(x * x))
  .flatMap((x) => list(x * x));
// {
//   map: [Function: map],
//   flatMap: [Function: flatMap],
//   value: [ 1, 16, 81, 256, 625 ]
// }
```

## State monad

Read the test cases and break your head to understand the state monad. It's aweful when you don't get it, but when you get it, you are a genius. Then you try to explain it to someone else and you realize you don't get it. It's a cycle. And by-product of which is a little bit of understanding, and a lot of frustration and headache. But then you start to get it, your grey matter expands and you evolve. Now the hurt gets real. You couldn't even understand the simple code, and now you are writing code that is beyond your understanding. You are a genius now. You are a state monad. Welcome to pain bud.
