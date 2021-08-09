/**
 * =======================
 * File Dependencies
 * =======================
 */
const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model

/**
 * R
  * - The Cats Model "class" will have the cats name, the cats breed, and the cat's image
 */
const catSchema = new mongoose.Schema({
  // Here are providing the fields (Property keys and their types) to our Collection Schema
  name: { type: String },
  breed: { type: String },
  img: { type: String }
});

// NOTE: Since we are not going to have a cat collection on its own we are not going to generate a model from it.

module.exports = catSchema;