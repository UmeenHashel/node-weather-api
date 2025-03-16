const axios = require("axios");
const User = require("../models/User");
const WeatherData = require("../models/WeatherData");
const generateWeatherReport = require("./geminiService");

async function fetchWeather() {
    const users = await User.find();

    for (let user of users) {
        const { lat, lon, city } = user.location;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const temp = response.data.main.temp;
        const desc = response.data.weather[0].description;

        const report = await generateWeatherReport(temp, desc, city);

        const weatherEntry = new WeatherData({ userId: user._id, city, temperature: temp, description: report });
        await weatherEntry.save();
    }
}

setInterval(fetchWeather, 3 * 60 * 60 * 1000);
