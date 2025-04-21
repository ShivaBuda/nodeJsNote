const path = require('path');

// console.log(__dirname)
// console.log(__filename)

const filepath = path.join("folder", "subfolder", "file.txt")
// console.log(filepath)

const parseData = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)
const sep = path.sep

// console.log(parseData, resolvedPath, extname, basename, dirname, sep)
console.log(sep)