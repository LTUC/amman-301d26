const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
app.use(cors())

const getWeather = require('./controller/Forecast.controller');

const {
  shoppingItems,
  getBananas
} = require('./controller/example.controller');



app.get('/', (request, response) => {
  response.send('Hello World 🥳');
});

app.get('/bananas', getBananas);

app.get('/shopping-list', shoppingItems);


app.get('/weather', getWeather);


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
