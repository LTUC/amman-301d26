/**
 * =======================
 * File Dependencies
 * =======================
 */
const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model

const catSchema = require('./cat.schema');

/**
 * REQUIREMENT:
 *   - The user model "class" will have an email Address and an array of Cats property
 *   - Each user Module will have an array of Cats 
 */

// Step 1: Draw the schema on which the model will be generated!
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  cats: [catSchema] // a field that is an array of cat Schemas 
});

// Step 2: Generate the model form the Schema 
// Note: A model is basically  a collection
// Collections in Mongo DB are used to hold Data
const userModel = mongoose.model('users', userSchema);


// Step 3: Use the model/ collection to create new data
// the proper is have a seed function
// this seed function will be called whenever you want to populate the Database with data

const seedUsersCollection = () => {
  try { // this try catch method is to safely add new users to the DB, and if the user already exists it wont crash our application
    const newUserOne = new userModel({
      email: "t.hamoudi@ltuc.com",
      cats: [
        {
          name: "mishmish",
          breed: "orange tabby",
          img: "https://pulpbits.net/wp-content/uploads/2014/01/Orange-tabby.jpg"
        },
        {
          name: "boogie",
          breed: "Calico",
          img: "https://pixfeeds.com/images/17/442620/1200-484713024-turkish-angora-calico-cat.jpg"
        },
      ]
    });
    const newUserTwo = new userModel({
      email: "tamim.hamoudi@gmail.com",
      cats: [
        {
          name: "mishmish",
          breed: "orange tabby",
          img: "https://pulpbits.net/wp-content/uploads/2014/01/Orange-tabby.jpg"
        },
        {
          name: "boogie",
          breed: "Calico",
          img: "https://pixfeeds.com/images/17/442620/1200-484713024-turkish-angora-calico-cat.jpg"
        },
      ]
    });

    // console.log(newUser);
    newUserOne.save();
    newUserTwo.save();
  } catch (error) {
    console.log("Error while creating the user: ", error.message)
  }
};


module.exports = {
  userModel,
  seedUsersCollection
}