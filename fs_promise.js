// const fs = require("fs");
const fs = require("fs/promises");

// const fileName = "promises_test.text";
// fs.promises
//     .writeFile(
//         fileName,
//         "This is a test file with file system promises",
//         "utf-8",
//     )
//     .then(console.log("File written successfully"))
//     .catch((err) => console.log(err));

const fileName = "promises_test.text";
fs.writeFile(fileName, "This is a test file with file system promises", "utf-8")
    .then(console.log("File written successfully"))
    .catch((err) => console.log(err));

fs.appendFile(fileName, "\nThis is an appended line")
    .then(console.log("File is updated successfully!"))
    .catch((err) => {
        console.log(err);
    });

fs.unlink(fileName)
    .then(console.log("File deleted successfully!"))
    .catch((err) => {
        console.error("Error deleting file:", err);
    });
