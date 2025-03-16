const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

require("dotenv").config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", weatherRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
