// This app create text file with user input content.
import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const showPrompt = () => {
    rl.question("Enter the file name: ", (fileName) => {
        rl.question("Enter the content: ", (content) => {
            createFile(fileName, content);
        });
    });
};

const createFile = (fileName, content) => {
    fileName = fileName.trim() + ".txt";
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error("Error creating file", err);
        } else {
            console.log("File created successfully");
            console.log("Hello Hello")
        }
    });
    rl.close();
};

showPrompt();
