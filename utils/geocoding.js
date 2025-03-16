const axios = require("axios");

const getCityFromCoordinates = async (lat, lon) => {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY; // Your OpenWeatherMap API key
        const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

        const response = await axios.get(url);
        if (response.data && response.data.length > 0) {
            return response.data[0].name; // Return the city name
        } else {
            throw new Error("City not found for the given coordinates");
        }
    } catch (error) {
        console.error("Error fetching city from coordinates:", error.message);
        throw error;
    }
};

module.exports = getCityFromCoordinates;