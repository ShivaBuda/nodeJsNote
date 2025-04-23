const API_KEY = "d6ec9c4111b4744c0a4a8c7b";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

https.get(API_URL, (respond) => {
    respond.on("data", (chunk) => {
        data += chunk;
    });

    respond.on("end", () => {
        const currencyData = JSON.parse(data).conversion_rates;
        rl.question("Enter the amnount in USD:", (usdAmount) => {
            rl.question(
                "Enter the currency code (e.g EUR, GBP):",
                (currencyCode) => {
                    
                },
            );
        });
    });
});
