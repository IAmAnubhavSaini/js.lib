/**
 * Represents a value that is absent or has no value.
 * @param {*} value - The value to be wrapped in the "nothing" monad.
 * @returns {Object} - The "nothing" monad object.
 */
function nothing(value) {
    return {
        /**
         * Maps over the value of the "nothing" monad.
         * @returns {Object} - The "nothing" monad object.
         */
        map: () => nothing(value),

        /**
         * Flat maps over the value of the "nothing" monad.
         * @returns {Object} - The "nothing" monad object.
         */
        flatMap: () => nothing(value),

        value,
    };
}

/**
 * Represents a value that is present or has a value.
 * @param {*} value - The value to be wrapped in the "just" monad.
 * @returns {Object} - The "just" monad object.
 */
function just(value) {
    return {
        /**
         * Maps over the value of the "just" monad.
         * @param {Function} fn - The mapping function to be applied to the value.
         * @returns {Object} - The "just" monad object.
         */
        map: (fn) => just(fn(value)),

        /**
         * Flat maps over the value of the "just" monad.
         * @param {Function} fn - The flat mapping function to be applied to the value.
         * @returns {*} - The result of applying the flat mapping function to the value.
         */
        flatMap: (fn) => fn(value),

        value,
    };
}

/**
 * Represents a maybe monad that can hold either a value or nothing.
 * @param {*} x - The value to be wrapped in the maybe monad.
 * @returns {Object} - The maybe monad object.
 */
function maybe(x) {
    return x === null || x === undefined ? nothing(x) : just(x);
}

/**
 * Represents an either monad that can hold either a left or right value.
 *
 * @param {*} left - The left value.
 * @param {*} right - The right value.
 * @returns {Object} - An either monad object.
 */
function either(left, right) {
    return {
        map: (fn) => (left ? either(fn(left), null) : either(null, fn(right))),
        flatMap: (fn) => (left ? fn(left) : fn(right)),
        value: left || right,
    };
}

/**
 * Creates a list monad.
 *
 * @param {Array} value - The value to be wrapped in the list monad.
 * @returns {Object} - The list monad object.
 */
function list(value) {
    return {
        map: (fn) => list(value.map(fn)),
        flatMap: (fn) => list(value.flatMap((x) => fn(x).value)),
        value,
    };
}

/**
 * Represents a value that will be available in the future.
 * @param {Function} computation - The computation function that produces the future value.
 * @returns {Object} - The "future" monad object.
 */
function future(computation) {
    let value = null;
    let isResolved = false;
    let callbacks = [];

    computation((result) => {
        if (!isResolved) {
            value = result;
            isResolved = true;
            callbacks.forEach((callback) => callback(result));
            callbacks = [];
        }
    });

    return {
        /**
         * Maps over the value of the "future" monad.
         * @param {Function} fn - The mapping function to be applied to the value.
         * @returns {Object} - The "future" monad object.
         */
        map: function (fn) {
            return future((resolve) => {
                if (isResolved) {
                    resolve(fn(value));
                } else {
                    callbacks.push((result) => {
                        resolve(fn(result));
                    });
                }
            });
        },

        /**
         * Flat maps over the value of the "future" monad.
         * @param {Function} fn - The flat mapping function to be applied to the value.
         * @returns {Object} - The "future" monad object.
         */
        flatMap: function (fn) {
            return future((resolve) => {
                if (isResolved) {
                    fn(value).value(resolve);
                } else {
                    callbacks.push((result) => {
                        fn(result).value(resolve);
                    });
                }
            });
        },

        /**
         * Returns a promise that resolves to the value of the "future" monad.
         * @returns {Promise} - A promise that resolves to the value of the "future" monad.
         */
        value: function () {
            return new Promise((resolve) => {
                if (isResolved) {
                    resolve(value);
                } else {
                    callbacks.push(resolve);
                }
            });
        },
    };
}

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
function state(computationFn) {
    return {
        /**
         * Runs the computation function with the initial state.
         * @param {*} initialState - The initial state.
         * @returns {*} - The result of the computation.
         */
        run: (initialState) => computationFn(initialState),

        /**
         * Maps the value of the state monad using the provided function.
         * @param {Function} fn - The mapping function.
         * @returns {Object} - The new state monad object with the mapped value.
         */
        map: (fn) =>
            state((s) => {
                const [value, nextState] = computationFn(s);
                return [fn(value), nextState];
            }),

        /**
         * Flat maps the value of the state monad using the provided function.
         * @param {Function} fn - The flat mapping function.
         * @returns {Object} - The new state monad object with the flat mapped value.
         */
        flatMap: (fn) =>
            state((s) => {
                const [value, nextState] = computationFn(s);
                const nextMonad = fn(value);
                return nextMonad.run(nextState);
            }),

        /**
         * Gets the current state.
         * @returns {Object} - The new state monad object with the current state.
         */
        getState: () => state((s) => [s, s]),

        /**
         * Sets the new state.
         * @param {*} newState - The new state.
         * @returns {Object} - The new state monad object with the updated state.
         */
        setState: (newState) => state((s) => [s, newState]),
    };
}

module.exports = { nothing, just, maybe, either, list, future, state };
