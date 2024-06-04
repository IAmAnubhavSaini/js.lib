const { base64 } = require("./string");
const { list } = require("./array");
const { number } = require("./heap");
const { fs } = require("./node");

const BooleanT = require("./primitives/boolean");
const Default = require("./primitives/default");
const FalseT = require("./primitives/false");
const StringT = require("./primitives/string");
const TrueT = require("./primitives/true");

const {canvas} = require("./canvas");
const Conversions = require("./conversions");

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
