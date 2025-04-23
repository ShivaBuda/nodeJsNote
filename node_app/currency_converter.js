const API_KEY = "d6ec9c4111b4744c0a4a8c7b";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

https.get(API_URL, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {
        const currencyRates = JSON.parse(data).conversion_rates;
        rl.question("Enter the amnount in USD:", (amount) => {
            rl.question(
                "Enter the currency code (e.g EUR, GBP):",
                (currencyCode) => {
                    const rate = currencyRates[currencyCode.toUpperCase()];
                    if (rate) {
                        console.log(
                            `${chalk.green("Converted amount:")} ${
                                amount * rate
                            }${currencyCode.toUpperCase()}`,
                        );
                    } else {
                        console.log(
                            `${chalk.red("Error:")} Invalid currency code`,
                        );
                    }
                    rl.close();
                },
            );
        });
    });
});
