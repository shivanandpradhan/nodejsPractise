//  file system module use cases...

// 3 ways to use..
// 1. asynchronous :- import fs from "fs/promises"
// 2. callback     :- import fs from "fs"
// 3. synchronous. :- import fs from "fs"

// _- callback use :- 

import fs from "fs";

// console.log(fs);

// // create a file
// fs.mkdir("templates", (err) => console.log(err))
// console.log("Directory created : templates")
  
// fs.mkdir("templates//html", (err) => console.log(err))
// console.log("folder created : html")

//  recursive create a directory.
fs.mkdir("templates//html//homePage", {recursive:true}, err => console.error(err));


// remove a directory

// fs.rmdir("./templates/html/homePage", err => console.error(err))
// console.log("directory Deleted")

// fs.rmdir("./templates", {recursive : true}, err => console.log(err)) // it will be removed in future
// use rm for this..
// fs.rm("./templates", {recursive: true}, err => console.log(err))


//  read a directory.... 
fs.readdir("./templates", (err, files) => {
  if (err) {
    console.log(err)
    return;
  }
  for (const file of files) 
    console.log(file)
})

// rename a folder
// fs.rename("./templates", 'htmlFiles', err => console.log(err));


// file .....

// write a file...
const data = "This folder is written using file system module of node.js. "
fs.writeFile("./readme.txt", data, err => console.error(err))

// append in a file...
const dat = "I am going to append this with previous one.";
fs.appendFile("./readme.txt", dat, (err) => console.log(err))
 
// read a file..

// // returns a buffer
// fs.readFile("./readme.txt", (err, data) => {
//   if (err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })


// data ==> use utf-8 encoding.
fs.readFile("./readme.txt", "utf-8", (err, data) => {
    if (err){
      console.log(err)
      return
    }
    console.log(data)
});
    

// stat function
fs.stat("./templates", (err, data) => {
  if (err) {
    console.log(err); return;
  }
  console.log(data)
})