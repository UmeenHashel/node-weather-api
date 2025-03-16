const express = require("express");
const router = express.Router();
const User = require("../models/User");
const getCityFromCoordinates = require("../utils/geocoding"); // Import the function

// Add new user
router.post("/users", async (req, res) => {
    try {
        const { email, lat, lon } = req.body;
        const city = await getCityFromCoordinates(lat, lon); // Use the function

        const user = new User({ email, location: { city, lat, lon } });
        await user.save();
        res.status(201).json({
            Id: user.shortId,
            email: user.email,
            location: user.location,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update user location
router.put("/users/:id/location", async (req, res) => {
    try {
        const { lat, lon } = req.body;
        const city = await getCityFromCoordinates(lat, lon); // Use the function

        const user = await User.findByIdAndUpdate(req.params.id, { location: { city, lat, lon } }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;