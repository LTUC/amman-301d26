/**
 * TODO:
 * 1. As a user after I log in I want to retrieve the data about the cats That I own from the server Side
 * 2. I want to display the data as the following:
 *   - Each user will have an array of Cats 
 *   - The user model "class" will have an email Address and an array of Cats property
 *   - The Cats Model "class" will have the cats name, the cats breed, and the cat's image
 * 3. When the user requests the data, the user need to provide their email so we can authenticate and authorize the correct data of cats to that user
 */

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
 * =======================
 */
app.use(cors())


/**
 * =======================
 * Require Controllers
 * =======================
 */
const { verifyToken } = require('./controller/auth.controller'); // Token Auth Controller
const { getCats } = require('./controller/cat.controller'); // Cats Controller

/**
 * Seed DB helper function
 * 
 */
const { seedUsersCollection } = require('./models/users.model');
// seedUsersCollection();
/**
 * =======================
 * Routes (Endpoints)
 * =======================
 */
app.get('/', (request, response) => response.send('Hello World 🥳 🍕'));// Proof Of Life Route
app.get('/verify-token', verifyToken); // verify JWT Token route
app.get('/cats', getCats);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
