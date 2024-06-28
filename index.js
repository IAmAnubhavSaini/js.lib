const { base64 } = require("./src/string");
const { list } = require("./src/array");
const { number } = require("./src/heap");
const { fs } = require("./src/node");

const BooleanT = require("./src/primitives/boolean");
const Default = require("./src/primitives/default");
const FalseT = require("./src/primitives/false");
const StringT = require("./src/primitives/string");
const TrueT = require("./src/primitives/true");

const { canvas } = require("./src/canvas");
const Conversions = require("./src/conversions");

module.exports = {
    base64,
    canvas,
    Conversions,
    fs,
    heap: {
        number,
    },
    list,
    primitives: {
        BooleanT,
        Default,
        FalseT,
        StringT,
        TrueT,
    },
};
