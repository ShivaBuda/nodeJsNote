import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const todos = [];
const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View All Tasks");
    console.log("3: Exit");
    rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter a task: ", (task) => {
            todos.push(task);
            console.log("Task added: ", task);
            showMenu();
        });
    } else if (option === "2") {
        console.log("Viewing All Tasks: ");
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
        showMenu();
    } else if (option === "3") {
        console.log("Exiting the application...");
        rl.close();
        console.log("Goodbye!");
    } else {
        console.log("Invalid option, please try again.");
        showMenu();
    }
};

showMenu();
