const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
const WEATHERBIT_URL = process.env.WEATHERBIT_URL;
const axios = require('axios');
const Forecast = require('../models/Forecast.model');
const Cache = require('../helpers/cache.helper');
let cacheObject = new Cache();

console.log(cacheObject);
/**
 * TODO:
 * 1. we want to implement a caching object [x]
 * 2. We want to either retrieve the data from the weatherbit api from the cache if the data has been requested before. [x]
 * 3. if the cache does not have the data we want, we will get the data from the weather-bit api then we are going to save it into the cache [x]
 * 4. is to empty the cache after 1 day passing. [x]
 */

const getWeatherBitData = async (lat, lon) => {
  console.log("getting the data from the WeatherBit API");
  const queryParams = {
    params: {
      key: WEATHERBIT_KEY,
      lat: lat,
      lon: lon
    }
  };
  const response = await axios.get(WEATHERBIT_URL, queryParams);
  const data = response.data.data.map(item => new Forecast(item));
  // Once we get the data form weather-bit we will need to cache to use it the next time

  cacheObject.forecast.push({
    "lat": lat,
    "lon": lon,
    "data": data
  });

  return data;
}

const getWeather = async (req, res) => {
  const { lat, lon } = req.query;

  // If the timestamp exceeds 1 day. we are going to reset the cache Object
  if (((Date.now() - cacheObject.timeStamp) > 86400000)) {
    console.log('Reset Cache');
    cacheObject = new Cache();
  }
  // Check if the cache forecast property is empty
  // If the cache is not empty we are going to check if the forecast lon and lat matches our searchQuery
  if (cacheObject.forecast.length) {

    const filteredData = cacheObject.forecast.find((location) => {
      return location.lat === lat && location.lon === lon
    }); // if it doesn't find any matching data, it will return undefined

    if (filteredData) {
      console.log("getting the data from the cache");
      res.json(filteredData.data);
    } else {
      // if no lat or lon match get the data from weather-bit
      res.json(await getWeatherBitData(lat, lon));
    }
  } else {

    res.json(await getWeatherBitData(lat, lon));
  }

}

module.exports = getWeather;