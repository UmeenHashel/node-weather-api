const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    city: String,
    temperature: Number,
    description: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WeatherData", weatherDataSchema);

