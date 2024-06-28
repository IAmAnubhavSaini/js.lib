const { MinHeap } = require("./min");

describe("MinHeap", () => {
    it("should create a default empty MinHeap", () => {
        const minHeap = new MinHeap();
        expect(minHeap.heap).toEqual([]);
    });
    it("should add items to the heap", () => {
        const minHeap = new MinHeap();
        minHeap.add(5);
        minHeap.add(3);
        minHeap.add(10);
        minHeap.add(1);
        minHeap.add(1);
        minHeap.add(2);
        expect(minHeap.heap).toEqual([1, 1, 2, 5, 3, 10]);
    });
    it("should poll the smallest item from the heap", () => {
        const minHeap = new MinHeap();
        minHeap.add(5);
        minHeap.add(3);
        minHeap.add(10);
        minHeap.add(1);
        minHeap.add(1);
        minHeap.add(2);
        expect(minHeap.poll()).toBe(1);
        expect(minHeap.poll()).toBe(1);
        expect(minHeap.poll()).toBe(2);
        expect(minHeap.poll()).toBe(3);
        expect(minHeap.poll()).toBe(5);
        expect(minHeap.poll()).toBe(10);
    });
    it("should peek the smallest item from the heap", () => {
        const minHeap = new MinHeap();
        minHeap.add(5);
        minHeap.add(3);
        minHeap.add(10);
        minHeap.add(1);
        minHeap.add(1);
        minHeap.add(2);
        expect(minHeap.peek()).toBe(1);
    });
});
