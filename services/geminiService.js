const { GoogleGenerativeAI } = require("@google-cloud/translate");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateWeatherReport(temp, desc, city) {
    const prompt = `Generate a weather report for ${city} with ${temp}°C temperature and ${desc}.`;
    const response = await genAI.generateContent(prompt);
    return response.candidates[0].content;
}

module.exports = generateWeatherReport;
