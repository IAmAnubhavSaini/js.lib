const { just, nothing, maybe, either, list, future, state } = require("./monad");

describe("just", () => {
    it("should map over the value of the just monad", () => {
        const value = 5;
        const fn = (x) => x * 2;
        const monad = just(value);
        const { value: actual } = monad.map(fn);
        const { value: expected } = just(fn(value));
        expect(actual).toEqual(expected);
    });

    it("should flat map over the value of the just monad", () => {
        const value = 5;
        const fn = (x) => just(x * 2);
        const monad = just(value);
        const { value: actual } = monad.flatMap(fn);
        const { value: expected } = fn(value);
        expect(actual).toEqual(expected);
    });

    it("should have the correct value", () => {
        const value = 5;
        const monad = just(value);
        expect(monad.value).toBe(value);
    });
});

describe("nothing", () => {
    it("should map over the value of the nothing monad", () => {
        const value = 5;
        const fn = (x) => x * 2;
        const monad = nothing(value);
        const { value: actual } = monad.map(fn);
        const { value: expected } = nothing(value);
        expect(actual).toEqual(expected);
    });

    it("should flat map over the value of the nothing monad", () => {
        const value = 5;
        const fn = (x) => just(x * 2);
        const monad = nothing(value);
        const { value: actual } = monad.flatMap(fn);
        const { value: expected } = nothing(value);
        expect(actual).toEqual(expected);
    });

    it("should have the correct value", () => {
        const value = 5;
        const monad = nothing(value);
        expect(monad.value).toBe(value);
    });
});

describe("maybe", () => {
    it("should return a just monad for non-null values", () => {
        const value = 5;
        const monad = maybe(value);
        expect(monad.value).toBe(value);
    });

    it("should return a nothing monad for null values", () => {
        const value = null;
        const monad = maybe(value);
        expect(monad.value).toBe(value);
    });

    it("should return a nothing monad for undefined values", () => {
        const value = undefined;
        const monad = maybe(value);
        expect(monad.value).toBe(value);
    });
});

describe("either", () => {
    it("should map over the value of the left either monad", () => {
        const leftValue = 1;
        const rightValue = 5;
        const fn = (x) => x * 2;
        const monad = either(leftValue, rightValue);
        const { value: actual } = monad.map(fn);
        const { value: expected } = either(fn(leftValue), null);
        expect(actual).toEqual(expected);
    });

    it("should map over the value of the right either monad", () => {
        const leftValue = 0;
        const rightValue = 10;
        const fn = (x) => x * 3;
        const monad = either(leftValue, rightValue);
        const { value: actual } = monad.map(fn);
        const { value: expected } = either(null, fn(rightValue));
        expect(actual).toEqual(expected);
    });

    it("should flat map over the value of the left either monad", () => {
        const leftValue = 5;
        const rightValue = 10;
        const fn = (x) => just(x * 2);
        const monad = either(leftValue, rightValue);
        const { value: actual } = monad.flatMap(fn);
        const { value: expected } = just(fn(leftValue).value);
        expect(actual).toEqual(expected);
    });

    it("should flat map over the value of the right either monad", () => {
        const leftValue = 0;
        const rightValue = 10;
        const fn = (x) => just(x * 3);
        const monad = either(leftValue, rightValue);
        const { value: actual } = monad.flatMap(fn);
        const { value: expected } = fn(rightValue);
        expect(actual).toEqual(expected);
    });

    it("should have the correct left value if it is truthy", () => {
        const leftValue = 10;
        const rightValue = 10;
        const monad = either(leftValue, rightValue);
        expect(monad.value).toBe(leftValue);
    });

    it("should have the correct right value if left is falsy", () => {
        const leftValue = false;
        const rightValue = 10;
        const monad = either(leftValue, rightValue);
        expect(monad.value).toBe(rightValue);
    });
});

describe("list", () => {
    it("should map over the value of the list monad", () => {
        const value = [1, 2, 3, 4, 5];
        const fn = (x) => x * 2;
        const monad = list(value);
        const { value: actual } = monad.map(fn);
        const { value: expected } = list(value.map(fn));
        expect(actual).toEqual(expected);
    });

    it("should flat map over the value of the list monad", () => {
        const value = [1, 2, 3, 4, 5];
        const fn = (x) => list([x, x * 2]);
        const monad = list(value);
        const { value: actual } = monad.flatMap(fn);
        const { value: expected } = list(value.flatMap((x) => fn(x).value));
        expect(actual).toEqual(expected);
    });

    it("should have the correct value", () => {
        const value = [1, 2, 3, 4, 5];
        const monad = list(value);
        expect(monad.value).toEqual(value);
    });
});

describe("future", () => {
    it("should resolve the future value", (done) => {
        const value = 5;
        const computation = (resolve) => {
            setTimeout(() => {
                resolve(value);
            }, 100);
        };
        const monad = future(computation);
        setTimeout(() => {
            monad.value().then((data) => {
                expect(data).toBe(value);
                done();
            });
        }, 110);
    });
});
describe("state", () => {
    it("should run the stateful computation and return the result value and the final state", () => {
        const computation = (s) => [s * 2, s + 1];
        const initialState = 5;
        const monad = state(computation);
        const [value, nextState] = monad.run(initialState);
        expect(value).toBe(initialState * 2);
        expect(nextState).toBe(initialState + 1);
    });

    it("should map over the value of the state monad", () => {
        const computation = (s) => [s * 2, s + 1];
        const initialState = 5;
        const monad = state(computation);
        const [value, nextState] = monad.map((x) => x + 1).run(initialState);
        expect(value).toBe(initialState * 2 + 1);
        expect(nextState).toBe(initialState + 1);
    });

    it("should flat map over the value of the state monad", () => {
        const computation = (s) => [s * 2, s + 1];
        const initialState = 5;
        const monad = state(computation);
        const [value, nextState] = monad.flatMap((x) => state((s) => [x + s, s * 2])).run(initialState);
        expect(value).toBe(16);
        expect(nextState).toBe((initialState + 1) * 2);
    });

    it("should get the current state of the state monad", () => {
        const computation = (s) => [s * 2, s + 1];
        const initialState = 5;
        const monad = state(computation);
        const [value, nextState] = monad.getState().run(initialState);
        expect(value).toBe(initialState);
        expect(nextState).toBe(initialState);
    });

    it("should set the state of the state monad", () => {
        const computation = (s) => [s * 2, s + 1];
        const initialState = 5;
        const newState = 10;
        const monad = state(computation);
        const [value, nextState] = monad.setState(newState).run(initialState);
        expect(value).toBe(5);
        expect(nextState).toBe(newState);
    });
});
