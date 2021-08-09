/**
 * =======================
 * App Dependencies
 * =======================
 */
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

/**
 * =======================
 * Env Variables
 * =======================
 */
const PORT = process.env.PORT;

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
/**
 * =======================
 * Routes
 * =======================
 */
app.get('/', (request, response) => response.send('Hello World 🥳 🍕'));// Proof Of Life Route
app.get('/verify-token', verifyToken); // verify JWT Token route


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
