const { MaxHeap } = require("./max");

describe("MaxHeap", () => {
    it("should create a default empty MaxHeap", () => {
        const maxHeap = new MaxHeap();
        expect(maxHeap.heap).toEqual([]);
    });
    it("should add items to the heap", () => {
        const maxHeap = new MaxHeap();
        maxHeap.add(5);
        maxHeap.add(3);
        maxHeap.add(10);
        maxHeap.add(1);
        maxHeap.add(1);
        maxHeap.add(2);
        expect(maxHeap.heap).toEqual([10, 3, 5, 1, 1, 2]);
    });
    it("should poll the smallest item from the heap", () => {
        const maxHeap = new MaxHeap();
        maxHeap.add(5);
        maxHeap.add(3);
        maxHeap.add(10);
        maxHeap.add(1);
        maxHeap.add(1);
        maxHeap.add(2);
        expect(maxHeap.poll()).toBe(10);
        expect(maxHeap.poll()).toBe(5);
        expect(maxHeap.poll()).toBe(3);
        expect(maxHeap.poll()).toBe(2);
        expect(maxHeap.poll()).toBe(1);
        expect(maxHeap.poll()).toBe(1);
    });
    it("should peek the smallest item from the heap", () => {
        const maxHeap = new MaxHeap();
        maxHeap.add(5);
        maxHeap.add(3);
        maxHeap.add(10);
        maxHeap.add(1);
        maxHeap.add(1);
        maxHeap.add(2);
        expect(maxHeap.peek()).toBe(10);
    });
});
