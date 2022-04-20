// each file is wrap with a funciton wrapper 


//  function (require, exports, module, __filename, __dirname) { }()
//  require -- for importing module
// exports -- for exporting things.
// module -- give reference of current module
// __filename -- current file name
// __dirname -- current dir name

console.log("Current Directory : " + __dirname);
console.log("Current File : " + __filename);

const math = require("./math.js")

const res = math.add(2, 3)
console.log("2 + 3 = " + res);

const sub = math.sub(5, 3)
console.log("5 - 3 = " + sub)