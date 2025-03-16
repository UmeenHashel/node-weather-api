const express = require("express");
const WeatherData = require("../models/WeatherData");

const router = express.Router();

// Fetch weather data for a user on a specific day
router.get("/weather/:userId/:date", async (req, res) => {
    try {
        const { userId, date } = req.params;

        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setHours(23, 59, 59, 999);

        const weatherRecords = await WeatherData.find({
            userId,
            timestamp: { $gte: startDate, $lte: endDate },
        });

        res.json(weatherRecords);
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

module.exports = router;
