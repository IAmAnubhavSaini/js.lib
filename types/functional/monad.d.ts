/**
 * Represents a value that is absent or has no value.
 * @param {*} value - The value to be wrapped in the "nothing" monad.
 * @returns {Object} - The "nothing" monad object.
 */
export function nothing(value: any): any;
/**
 * Represents a value that is present or has a value.
 * @param {*} value - The value to be wrapped in the "just" monad.
 * @returns {Object} - The "just" monad object.
 */
export function just(value: any): any;
/**
 * Represents a maybe monad that can hold either a value or nothing.
 * @param {*} x - The value to be wrapped in the maybe monad.
 * @returns {Object} - The maybe monad object.
 */
export function maybe(x: any): any;
/**
 * Represents an either monad that can hold either a left or right value.
 *
 * @param {*} left - The left value.
 * @param {*} right - The right value.
 * @returns {Object} - An either monad object.
 */
export function either(left: any, right: any): any;
/**
 * Creates a list monad.
 *
 * @param {Array} value - The value to be wrapped in the list monad.
 * @returns {Object} - The list monad object.
 */
export function list(value: any[]): any;
/**
 * Represents a value that will be available in the future.
 * @param {Function} computation - The computation function that produces the future value.
 * @returns {Object} - The "future" monad object.
 */
export function future(computation: Function): any;
/**
 * Represents a state monad, which encapsulates a computation that carries an internal state.
 *
 * @param {function} computationFn - The computation function that takes the current state as input and returns a tuple containing the computed value and the next state.
 * @returns {object} - An object representing the state monad with the following methods:
 *   - run: A function that executes the computation with the initial state and returns the computed value.
 *   - map: A function that applies a transformation function to the computed value and returns a new state monad with the transformed value.
 *   - flatMap: A function that applies a function that produces a new state monad to the computed value and returns the result of running the new state monad with the next state.
 *   - getState: A function that returns a new state monad with the current state as the computed value.
 *   - setState: A function that takes a new state as input and returns a new state monad with the current state as the computed value and the new state as the next state.
 */
export function state(computationFn: Function): object;
