/**
 * =======================
 * File Dependencies
 * =======================
 */
const { userModel } = require('../models/users.model'); // the userModel that we will use to get the users data from

const getCats = async (req, res) => {
  const { email } = req.query; // we are getting the email from the query parameter

  // Using the model, we are going to either use the find or findOne Method to get the data from the DB
  // translation code: in the userModel collection, find me a user data that matches the email 
  userModel.findOne({ email: email }, (err, user) => {

    if (user === null) {
      res.send('no data was found');
    } else {
      res.json(user.cats);
    }
  });

};


module.exports = {
  getCats
}