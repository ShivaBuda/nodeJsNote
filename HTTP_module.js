// Live server
// npm i nodemon
// command=> nodemon >file name<
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> h1>Hello I am Shiv Buda </h1>");
        res.end();
    }

    if (req.url === "/source-code") {
        res.setHeader("Content-Type", "text/plain");
        res.write("I am very excited learn Node.js");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`I am listening to port number ${PORT}.`);
});
