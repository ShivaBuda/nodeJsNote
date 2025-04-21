const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
    res.send("Hello World! This is a simple Express server.");
    //     return next(new Error("This is a test error."));
});

app.get("/about", (req, res, next) => {
    return next(new Error("This is a test error."));
    //     res.send("This is the about page.");
});

// Error handling
// This middleware will catch any errors that occur in the app
// and send a 500 response to the client.
// It should be the last middleware in the stack.

app.use((err, req, res, next) => {
    console.error(err.stack);
    // This will send a 500 response to the client
    res.status(500).send("Something broke!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
