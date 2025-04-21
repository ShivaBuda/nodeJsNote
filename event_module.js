const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define an event listener for the "greet" event
// This listener will be triggered when the "greet" event is emitted
emitter.on("greet", () => {
    console.log("Hello World from EventEmitter!");
});

// Emit the "greet" event
// This will trigger the listener defined above
emitter.emit("greet");

// greet event with a parameter
emitter.on("greet", (name) => {
    console.log(`Hello ${name} from EventEmitter!`);
});

emitter.emit("greet", "Shiv Bhai");

// Emit the "greet" event with a parameter as an object
// This allows for more complex data to be passed to the event listener
emitter.on("greet", (arg) => {
    console.log(
        `Hello ${arg.name} from EventEmitter! You are ${arg.age} years old.`,
    );
});

emitter.emit("greet", {name: "Shiv Bhai", age: 25});
