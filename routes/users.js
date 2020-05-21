const router = require('express').Router();
let User = require("../models/user.model");

// first route gets a list of all users
//returns in json format w res.json(users) and catches errors
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

// handles post req adds users 
router.route('/add').post((req, res) => {
    //add users captures the data of user 
    const username = req.body.username;
  
    // creates a new instince user 
    const newUser = new User({username});
  // saved in the db with the save method
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  }); 

  module.exports = router;