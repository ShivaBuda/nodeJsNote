// Syncronous file system operations using the fs module in Node.js
// Old way of writing code

const fs = require("fs");

// fs.mkdirSync("Node Async");
fs.writeFileSync("text.txt", "Hello, Shiva How are you?");
fs.appendFileSync("text.txt", " It's been long we never met. How are you doing?");

// fs.renameSync('text.txt', "new_text.txt");
const read_file= fs.readFileSync("text.txt", "utf-8");
console.log(read_file);

// fs.unlinkSync("new_text.txt");
// fs.rmdirSync("new_folder")