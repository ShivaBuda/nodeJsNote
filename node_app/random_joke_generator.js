const url = "https://official-joke-api.appspot.com/random_joke";

import https from "https";
import chalk from "chalk";

const getRandomJoke = () => {
    https.get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            const joke = JSON.parse(data);
            //  console.log(joke);
            console.log("Here is a random joke for you:");
            console.log(chalk.blue("Joke:"), chalk.green(joke.setup));
            console.log(chalk.blue("Punchline:"), chalk.red(joke.punchline));
        });
        res.on("error", (err) => {
            console.error(chalk.red("Error fetching joke: "), err.message);
        });
    });
};

getRandomJoke();
