const fs = require("fs/promises");

const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

fs.readdir(filePath)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
