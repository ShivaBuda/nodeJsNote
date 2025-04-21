const fs = require("fs/promises");
const path = require("path");

const fileName = "async_await.txt";
const filePath = path.join(__dirname, fileName);
const fileContent = "This is a test file created using async/await.";
console.log(filePath);

const writeFileWithAsyncAwait = async () => {
    try {
        await fs.writeFile(filePath, fileContent, "utf-8");
        console.log("File written successfully?");
    } catch (err) {
        console.log("Error writing fiile:");
    }
};

writeFileWithAsyncAwait();

const readDirectoryWithAsyncAwait = async () => {
    try {
        const res = await fs.readdir(filePath);
        console.log(res);
    } catch (err) {
        console.log("Error reading directory:", err.message);
    }
};
readDirectoryWithAsyncAwait();

const readFile = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    } catch (err) {
        console.log("Error reading file:", err);
    }
};

const updateFile = async () => {
    try {
        await fs.appendFile(filePath, "\nThis is an appended text.", "utf-8");
        console.log("File updated successfully.");
    } catch (err) {
        console.log("Error updating file:", err);
    }
};

updateFile();
readFile();
