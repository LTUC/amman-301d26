const { request, response } = require('express');
const express = require('express') // require the express package
require('dotenv').config(); // require the dotenv package
const cors = require('cors');
const app = express() // initialize your express app instance
const PORT = process.env.PORT;
app.use(cors()) // after you initialize your express app instance
// a server endpoint 


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
// kick start the express server to work
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
