const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
const WEATHERBIT_URL = process.env.WEATHERBIT_URL;
const axios = require('axios');
const Forecast = require('../models/Forecast.model');

// Old before refactoring
// async function getWeather(req, res) {
//   const { lat, lon } = req.query;

//   const queryParams = {
//     params: {
//       key: WEATHERBIT_KEY,
//       lat: lat,
//       lon: lon
//     }
//   };
//   const response = await axios.get(WEATHERBIT_URL, queryParams);
//   const data = response.data.data.map(item => new Forecast(item));
//   res.json(data);
// }

// Better,  calling functions is harder on the server than a variable lookup.
// therefore variable functions are more performance friendly
const getWeather = async (req, res) => {
  const { lat, lon } = req.query;

  const queryParams = {
    params: {
      key: WEATHERBIT_KEY,
      lat: lat,
      lon: lon
    }
  };
  const response = await axios.get(WEATHERBIT_URL, queryParams);
  const data = response.data.data.map(item => new Forecast(item));
  res.json(data);

}

module.exports = getWeather;