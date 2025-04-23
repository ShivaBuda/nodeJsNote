const WEATHER_API_KEY = "2514c286add6b646cda13c91aee48ac4";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getWeather = async (city) => {
    const url = `${WEATHER_URL}${city}&appid=${WEATHER_API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City could not found!");
        }
        const weatherData = await response.json();
        console.log(weatherData);
        console.log("Weather information for", city);
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp} C`);
        console.log(`Humidity: ${weatherData.main.humidity} %`);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
    }
};

const city = await rl.question("Enter the name of the city: ");
await getWeather(city);
rl.close();
