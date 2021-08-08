const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa'); // we are going to use this package to connect to Auth0
const PORT = process.env.PORT;
const JWKSURI = process.env.JWKSURI;
app.use(cors())

const client = jwksClient({
  // we will send a request to Auth0 to connect to it
  jwksUri: JWKSURI
});


app.get('/', (request, response) => {
  response.send('Hello World 🥳');
});

/**
 * TODO:
 * 1. We need to create an endpoint where the front end will check if the token is ok with the backend
 * 2. This endpoint callback function will check with Auth0 if the sent token is ok or not
 * 3. if the token is ok, will send back the user information from Auth0
 * 4. if the token is not valid, an error message, 'invalid token' will be sent back to the User
 */

/** ========================================== */
// Copy from here
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}
// till here
/** ========================================== */


app.get('/verify-token', (request, response) => {
  // The token will be passed from the frontend to the backend using the request
  // The request will be passing the token the request headers
  const token = request.headers.authorization.split(' ')[1];
  console.log(token);
  // Once we got the token, we wil want to verify the token with JWT
  jwt.verify(token, getKey, {}, (error, user) => {
    if (error) {
      response.send('invalid token');
    }
    response.json(user);
  });
  // response.send("got your token 🍕");
});


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
