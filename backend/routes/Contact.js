// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// POST route to submit contact form
router.post('/contact', contactController.submitContactForm);

module.exports = router;
