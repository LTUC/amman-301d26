const { request, response } = require('express');
const express = require('express') // require the express package
const axios = require('axios');
require('dotenv').config(); // require the dotenv package
const cors = require('cors');
const app = express() // initialize your express app instance
const PORT = process.env.PORT;
const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY; // get the weathebit key from the weatherbit API website
const WEATHERBIT_URL = process.env.WEATHERBIT_URL; // get the weatherbit URL from the weatherbit API website
app.use(cors()) // after you initialize your express app instance
// a server endpoint 

const Forecast = require('./models/Forecast');

app.get('/', // our endpoint name
  (request, response) => { // callback function of what we should do with our request
    response.send('Hello World 🥳'); // our endpoint function response
  });

app.get('/bananas', (request, response) => {
  const bananasObj = {
    "bananas": "Bananas are cool! 🍨 🍌"
  };
  response.json(bananasObj);
});

/**
 * TODO: 
 * 1. Add a new endpoint named Shopping list
 * 2. in the callback function whenever the user request this route
 * they will get back an array of shopping lists!
 */
app.get('/shopping-list', (request, response) => {
  const shoppingListItems = [
    'PS5 🖥️',
    'controllers 🎮',
    'Games CDs 💿',
    'Book 📖'
  ];
  response.send(shoppingListItems);
});

/**
 * TODO: class 08
 * 1. create an endpoint named /weather [x]
 * 2. when the use requests the endpoint. they will pass, search QUery, lat, lon [x]
 * 3. once you get the query parameters from the requst, you will use it to pass it to the weather bit API[x]
 * 4. once you get the data form weather, model the data
 * 5. send the data to the frontend to be displayed
 */

app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query; /// get the query parameters form the URL, using destructuring assignment

  // way number 1 concatenation
  // const response = axios.get(`${WEATHERBIT_URL}?key=${WEATHERBIT_KEY}&lat=${lat}&lon=${lon}`);

  // way number is using the object params argument
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

});


// kick start the express server to work
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
