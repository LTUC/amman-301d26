/**
 * 
 * This helper file contains the config to make the call connection to Auth0 using the JWK library
 */

/**
 * =======================
 * File Dependencies
 * =======================
 */
const jwksClient = require('jwks-rsa');
/**
 * =======================
 * Env Variables
 * =======================
 */
const JWKSURI = process.env.JWKSURI;
/**
 * =======================
 * Make the client instance that will connect to Auth0
 * =======================
 */
const client = jwksClient({
  jwksUri: JWKSURI
});

/**
 * =======================
 * getKey Function that will verify the sent token from the front end with Auth0
 * =======================
 */
const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

module.exports = {
  getKey
};