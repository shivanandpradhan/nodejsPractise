//  file system module use cases...

// 3 ways to use..
// 1. asynchronous :- import fs from "fs/promises"
// 2. callback     :- import fs from "fs"
// 3. synchronous. :- import fs from "fs"

import fs from "fs/promises";
import path from "path";

// console.log(fs);

// create a directory :- asynchronously
try {
  // await fs.mkdir("templates");
  // console.log("Directory created : templates")
  // await fs.mkdir("templates//html")
  // console.log("folder created : html")
  // await fs.mkdir("templates//html//homePage", {recursive:true})
  // console.log("directory created recursively...")
} catch (err) {
  console.log(err);
}

// remove a directory
try {
  // await fs.rmdir("./templates/html/homePage")
  // console.log("directory Deleted")
  // await fs.rmdir("./templates", {recursive : true}) // it will be removed in future
  // use rm for this..
  // await fs.rm("./templates", {recursive: true})
} catch (err) {
  console.error(err);
}

// // read a directory.....
// try{
//     const files = await fs.readdir("./templates")

//     for (const file of files)
//         console.log(file)
// }
// catch(err){
//     console.log(err)
// }

// // rename a folder
// try{
//     await fs.rename("./templates", 'htmlFiles')
// }
// catch(err){
//     console.log(err)
// }

// file .....

// // write a file...
// try{
//     const data = "This folder is written using file system module of node.js"
//     await fs.writeFile("./readme.txt", data)
// }
// catch(err){
//     console.error(err);
// }

// // append in a file...
// try {
//   const data = "I am going to append this with previous one.";
//   await fs.appendFile("./readme.txt", data);
//   console.log("text appended..");
// } catch (err) {
//   console.error(err);
// }

// // read a file..
// try {
//     // const data = await fs.readFile("./readme.txt")
//     // console.log(data)  it returns buffer..

//     // data ==> use utf-8 encoding.
//     const data = await fs.readFile("./readme.txt", "utf-8");
//     console.log(data);
// } catch (err) {
//     console.log(err)
// }


// stat function
try {
    const res = await fs.stat("./templates")
    console.log(res)
} catch (err) {
    console.error(err);   
}
