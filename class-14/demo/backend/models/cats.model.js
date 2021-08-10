/**
 * =======================
 * File Dependencies
 * =======================
 */
const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model


// Step 1: Draw the schema on which the model will be generated!
const catSchema = new mongoose.Schema({
  // Here are providing the fields (Property keys and their types) to our Collection Schema
  email: { type: String },
  cat_name: { type: String },
  cat_breed: { type: String },
  cat_img: { type: String },
});

// Step 2: Generate the model form the Schema 
// Note: A model is basically  a collection
// Collections in Mongo DB are used to hold Data
const catModel = mongoose.model('cats', catSchema);


// Step 3: Use the model/ collection to create new data
// the proper is have a seed function
// this seed function will be called whenever you want to populate the Database with data

const seedCatsCollection = () => {
  try { // this try catch method is to safely add new users to the DB, and if the user already exists it wont crash our application
    const firstCats = new catModel({
      email: "tamim.hamoudi@gmail.com",
      cat_name: "mishmish",
      cat_breed: "orange tabby",
      cat_img: "https://pulpbits.net/wp-content/uploads/2014/01/Orange-tabby.jpg"
    });
    const secondCats = new catModel({
      email: "tamim.hamoudi@gmail.com",
      cat_name: "boogie",
      cat_breed: "Calico",
      cat_img: "https://pixfeeds.com/images/17/442620/1200-484713024-turkish-angora-calico-cat.jpg"
    });

    // console.log(firstCats);
    firstCats.save();
    secondCats.save();
  } catch (error) {
    console.log("Error while creating the user: ", error.message)
  }
};


module.exports = {
  catModel,
  seedCatsCollection
}