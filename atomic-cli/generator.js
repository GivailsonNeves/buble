const componentSetup = require('./component-maker');
const indexSetup = require('./index-maker');
const storieSetup = require('./storie-maker');
const styleSetup = require('./style-maker');

const args = process.argv.slice(2);

if (args.length === 0) {
    console.error("paramns: [atomic-type] [element-name-lower-dashed]");
    return;
}

if (args.length !== 2) {
    console.error("You must provide two parameters");
    return;
}

if (!["a", "m", "o", "t"].includes(args[0])) {
    console.error("the first element should be: a (atom), m (molecule), o (organism) or t(template)")
    return;
}

const atomicElements = {
    "a": "atoms",
    "m": "molecules",
    "o": "organisms",
    "t": "templates",
}

componentSetup(atomicElements[args[0]], args[1]);
indexSetup(atomicElements[args[0]], args[1]);
storieSetup(atomicElements[args[0]], args[1]);
styleSetup(atomicElements[args[0]], args[1]);