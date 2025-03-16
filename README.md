# Weather Application API

A Node.js backend application that stores users' emails and locations, fetches weather data, and sends hourly weather reports every 3 hours.

## Features

- **User Management:**
  - Add new users with email and location (latitude, longitude).
  - Update user locations.
- **Weather Data:**
  - Fetch weather data for a user on a specific day.
  - Automatically fetch weather data using the OpenWeatherMap API.
- **Email Notifications:**
  - Send hourly weather reports to users via email using Nodemailer.
- **Geocoding:**
  - Convert latitude and longitude into a city name using the OpenWeatherMap Geocoding API.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
- **APIs:**
  - OpenWeatherMap API (for weather data and geocoding)
- **Email Service:**
  - Nodemailer (with Gmail or other email services)
- **Other Tools:**
  - Postman (for API testing)
  - dotenv (for environment variables)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- OpenWeatherMap API key (sign up at [OpenWeatherMap](https://openweathermap.org/api))
- Gmail account (for sending emails) or another email service
