// Asynchronous file system operations using the fs module in Node.js
// This code demonstrates how to create, write, append, rename, copy, and delete files and folders using the fs module in Node.js.
const fs = require("fs");

const filePath = "node_text.txt";
// Create a file named node_text.txt and write some text to it
fs.writeFile(
    filePath,
    "Hello, World! This code will create a node_text.txt file. To run this code type this command 'node index.js.'",
    "utf-8",
    (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log("File written successfully");
    },
);

// Append some text to the existing file
fs.appendFile(
    "node_text.txt",
    "utf-8",
    " This is the second line of text added at the end with appendFile method.",
    (err) => {
        if (err) {
            console.error("Error appending to file:", err);
            return;
        }
        console.log("File appended successfully");
    },
);

// This will change the name of the file to node_text_renamed.txt
fs.rename("node_text.txt", "node_text_renamed.txt", (err) => {
    if (err) {
        console.error("Error renaming file:", err);
        return;
    }
    console.log("File renamed successfully");
});

fs.copyFile("node_text_renamed.txt", "node_text_copied.txt", (err) => {
    if (err) {
        console.error("Error copying file:", err);
        return;
    }
    console.log("File copied successfully");
});

// This will delete the file node_text_renamed.txt
fs.unlink("node_text_renamed.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }
    console.log("File deleted successfully");
});

// Delete folder named myfolder
fs.rm("./myfolder", {recursive: true}, (err) => {
    if (err) {
        console.error("Error deleting folder", err);
        return;
    }
    console.log("Folder deleted successfully");
});
