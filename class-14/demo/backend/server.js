/**
 * =======================
 * App Dependencies
 * =======================
 */
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

/**
 * =======================
 * Env Variables
 * =======================
 */
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

/**
 * =======================
 * Connect to Mongo DB
 * =======================
 */
// Mongo DB wil create the DB once data is added to it
mongoose.connect(`${MONGO_DB_URL}/cats`, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * =======================
 * Express App Middleware
 * - Middleware are requests checkpoints
 * - These checkpoints handel request operations such as:
 *  - enable cors in the request header
 *  - Decoding the json body request for post request
 * =======================
 */
app.use(cors());
app.use(express.json()); // it will decode the post body request data


/**
 * =======================
 * Require Controllers
 * =======================
 */
const { verifyToken } = require('./controller/auth.controller'); // Token Auth Controller
const {
  getCats,
  creatCat,
  deleteCat,
  updateCat
} = require('./controller/cat.controller'); // Cats Controller

/**
 * Seed DB helper function
 * 
 */
const { seedCatsCollection } = require('./models/cats.model');
// seedCatsCollection();
/**
 * =======================
 * Routes (Endpoints)
 * =======================
 */

/**
 * TODO:
 * 1. we need to implement the RESTFULL standard into our backend API, to make our API restfull
 * 2. Add the CREATE and DELETE operations to your APP
 *    - Add a post method to create a new cat
 *    - Add a delete method to delete a cat by its id
 * 3. For the delete operation do the following:
 *    - create a delete http method
 *    - connect that delete endpoint to a delete operation with a callback function
 *    - to delete items with the delete request we will use the endpoint parameter
 *    - what we will pass in the parameter will be the ID of the cat that we want to delete
 * 
 * Lecture 14:
 * 
 * 4. We need to implement an endpoint to update our cats
 *    - the endpoint will call a callback function that will update the data in our DB
 *    - the endpoint should the ID of the cat that we want to update
 */
app.get('/', (request, response) => response.send('Hello World 🥳 🍕'));// Proof Of Life Route
app.get('/verify-token', verifyToken); // verify JWT Token route
app.get('/cats', getCats); // Read Operation
app.post('/cat', creatCat); // This endpoint is only responsible for handling requests that will create new cats
app.delete('/cat/:cat_id', deleteCat);
app.put('/cat/:cat_id', updateCat);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
