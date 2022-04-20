//  file system module use cases...

// 3 ways to use..
// 1. asynchronous :- import fs from "fs/promises"
// 2. callback     :- import fs from "fs"
// 3. synchronous. :- import fs from "fs"

// _- synchronous use :- 

import fs from "fs";

// console.log(fs);

// // create a file
// fs.mkdirSync("templates")
// console.log("Directory created : templates")
  
// fs.mkdirSync("templates//html")
// console.log("folder created : html")

//  recursive create a directory.
fs.mkdirSync("templates//html//homePage", {recursive:true});


// remove a directory

// fs.rmdirSync("./templates/html/homePage", err => console.error(err))
// console.log("directory Deleted")

// fs.rmdirSync("./templates", {recursive : true}, err => console.log(err)) // it will be removed in future
// use rm for this..
// fs.rmSync("./templates", {recursive: true}, err => console.log(err))


//  read a directory.... 
const files = fs.readdirSync("./templates")
for (const file of files) 
    console.log(file)

// //rename a folder
// fs.renameSync("./templates", 'htmlFiles', err => console.log(err));


// file .....

// write a file...
const data = "This folder is written using file system module of node.js. "
fs.writeFileSync("./readme.txt", data)

// append in a file...
const dat = "I am going to append this with previous one.";
fs.appendFileSync("./readme.txt", dat)
 
// read a file..

// // returns a buffer
// const data = fs.readFileSync("./readme.txt")
// console.log(data)


// data ==> use utf-8 encoding.
const content = fs.readFileSync("./readme.txt", "utf-8");
console.log(content)
    

// stat function
console.log(fs.statSync("./templates"))