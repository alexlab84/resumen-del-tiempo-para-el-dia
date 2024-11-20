import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

export default fetchWeatherData;