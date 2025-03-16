const mongoose = require("mongoose");
const shortId = require("shortid");

const userSchema = new mongoose.Schema({
    shortId: { type: String, default: shortId.generate, unique: true },
    email: { type: String, required: true, unique: true },
    location: {
        city: { type: String },
        lat: { type: Number },
        lon: { type: Number },
    },
});

module.exports = mongoose.model("User", userSchema);

