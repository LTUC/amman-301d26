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
