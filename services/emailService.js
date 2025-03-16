const nodemailer = require("nodemailer");
const User = require("../models/User");
const WeatherData = require("../models/WeatherData");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

async function sendWeatherEmails() {
    const users = await User.find();

    for (let user of users) {
        const latestWeather = await WeatherData.findOne({ userId: user._id }).sort({ timestamp: -1 }).limit(1);

        if (!latestWeather) continue;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Your Weather Update",
            text: latestWeather.description,
        };

        await transporter.sendMail(mailOptions);
    }
}

setInterval(sendWeatherEmails, 3 * 60 * 60 * 1000);
