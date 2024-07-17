const { MaxHeap: NumberMaxHeap } = require("./max");
const { MinHeap: NumberMinHeap } = require("./min");

module.exports = {
    number: {
        MinHeap: NumberMinHeap,
        MaxHeap: NumberMaxHeap,
    },
};
