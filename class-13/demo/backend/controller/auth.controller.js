/**
 * =======================
 * File Dependencies
 * =======================
 */
const jwt = require('jsonwebtoken');
const { getKey } = require('../helpers/auth.helper');

/**
 * verify Token Callback Controller
 * Verifies if the passed token in the headers from the frontend is valid or not
 */
const verifyToken = async (request, response) => {
  const token = request.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, (error, user) => {
    if (error) {
      response.send('invalid token');
    }
    response.json(user);
  });
};

module.exports = { verifyToken };