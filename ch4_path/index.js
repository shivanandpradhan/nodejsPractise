// path module..

import path from "path"

// console.log(path)

console.log(path.basename("c://users//shivanand pradhan//Desktop//nodePractise//ch4_path//index.js"))

console.log(path.dirname("c://users//shivanand pradhan//Desktop//nodePractise//ch4_path//index.js"))

console.log(path.extname("c://users//shivanand pradhan//Desktop//nodePractise//ch4_path//index.js"))

console.log(path.join("c://users","shivanand pradhan//Desktop//", "nodePractise//ch4_path//index.js"))

console.log(path.join("c://users","shivanand pradhan//Desktop//", "nodePractise//ch4_path//index.js", ".."))

console.log(path.parse("c://users//shivanand pradhan//Desktop//nodePractise//ch4_path//index.js"))

console.log(path.normalize("c:////users/shivanand pradhan///////desktop"))