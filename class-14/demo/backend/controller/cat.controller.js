/**
 * =======================
 * File Dependencies
 * =======================
 */
const { catModel } = require('../models/cats.model'); // the catModel that we will use to get the users data from

const getCats = async (req, res) => {
  const { email } = req.query; // we are getting the email from the query parameter

  // Using the model, we are going to either use the find or findOne Method to get the data from the DB
  // translation code: in the catModel collection, find me a user data that matches the email 
  catModel.find({ email: email }, (err, userCats) => {

    if (userCats === null) {
      res.send('no data was found');
    } else {
      res.json(userCats);
    }
  });

}

/**
 * So the create cat function will create a new cat for a specific user
 * Therefor we need to associate the created cat with an email address
 * and of course we need the details of the info (name, breed, img)
 */
const creatCat = async (req, res) => {
  console.log("=======");
  // To access the body data you will first need to decode the body data
  // console.log(req.body);
  // after decoding we need to assign the values to variables from the request body
  const {
    email,
    cat_name,
    cat_breed,
    cat_img
  } = req.body;

  // create the new cat 
  const newCatObj = new catModel({
    email: email,
    cat_name: cat_name,
    cat_breed,
    cat_img
  });
  newCatObj.save();

  res.json(newCatObj);
}

const deleteCat = async (req, res) => {
  // get the params values from the request
  const catId = req.params.cat_id;

  catModel.deleteOne({ _id: catId }, (error, deleted) => {
    res.send(deleted);
  });

}


/**
 * With the update cat function, we are going to get both the params and the req body data
 * 
 * - the params are going to be used to get the ID of the item we want to update in our DB
 * - the body will contain the new data that we want to update
 */

const updateCat = async (req, res) => {

  const catId = req.params.cat_id; // the passed cat ID in the params

  const {
    cat_name,
    cat_breed,
    cat_img
  } = req.body;

  // by default the findByIdAndUpdate method will return the old data even if it got updated
  // therefore we need to provide a flag to tell the method to return the new updated data
  catModel.findByIdAndUpdate(
    { _id: catId }, // the id of the item we want to find
    {
      cat_name: cat_name,
      cat_breed: cat_breed,
      cat_img: cat_img
    }, // will be the list of new data we want to update
    { new: true }, // the flag to tell the method to return the new updated data
    (err, data) => {
      res.json(data);
    }
  )

}

module.exports = {
  getCats,
  creatCat,
  deleteCat,
  updateCat
}