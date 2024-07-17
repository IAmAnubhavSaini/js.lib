/**
 * MaxHeap
 * */
export class MaxHeap {
    heap: any[];
    /**
     *  Get the left child index
     *  @param {number} parentIndex
     *  @return {number}
     *  */
    getLeftChildIndex(parentIndex: number): number;
    /**
     *  Get the right child index
     *  @param {number} parentIndex
     *  @return {number}
     *  */
    getRightChildIndex(parentIndex: number): number;
    /**
     *  Get the parent index
     *  @param {number} childIndex
     *  @return {number}
     *  */
    getParentIndex(childIndex: number): number;
    /**
     * Check if the left child exists
     * @param {number} index
     * @return {boolean}
     * */
    hasLeftChild(index: number): boolean;
    /**
     * Check if the right child exists
     * @param {number} index
     * @return {boolean}
     * */
    hasRightChild(index: number): boolean;
    /**
     * Check if the parent exists
     * @param {number} index
     * @return {boolean}
     * */
    hasParent(index: number): boolean;
    /**
     *  Get the left child
     *  @param {number} index
     *  @return {number}
     *  */
    leftChild(index: number): number;
    /**
     * Get the right child
     * @param {number} index
     * @return {number}
     * */
    rightChild(index: number): number;
    /**
     * Get the parent
     * @param {number} index
     * @return {number}
     * */
    parent(index: number): number;
    /**
     * Swap two items in the heap
     * @param {number} index1
     * @param {number} index2
     * */
    swap(index1: number, index2: number): void;
    /**
     * Get the biggest item from the heap
     * @return {number}
     * */
    peek(): number;
    /**
     * Poll the biggest item from the heap
     * @return {number}
     * */
    poll(): number;
    /**
     * Add an item to the heap
     * @param {number} item
     * */
    add(item: number): void;
    /**
     * Move the item up the heap
     * */
    heapifyUp(): void;
    /**
     * Move the item down the heap
     * */
    heapifyDown(): void;
}
