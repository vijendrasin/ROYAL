const express = require('express');
const router = express.Router();
const signupController = require('../controller/signup');

// Route to create a new signup
router.post('/', signupController.createSignup);

// Route to get all signups
router.get('/', signupController.getAllSignups);

// Route to get a single signup by ID
router.get('/:id', signupController.getSignupById);

// Route to update a signup by ID
router.put('/:id', signupController.updateSignupById);

// Route to delete a signup by ID
router.delete('/:id', signupController.deleteSignupById);

module.exports = router;
