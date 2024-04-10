// controllers/contactController.js

const ContactSubmission = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, phone, subject, message,file } = req.body;

    // Create a new contact submission
    // const newSubmission = new ContactSubmission({
    //   name,
    //   email,
    //   phone,
    //   subject,
    //   message,
    //   file
    //   // Handle file upload if needed
    // });

    // // Save the submission to the database
    // var a= await newSubmission.save();
console.log(req.body);
    res.status(201).json({ success: true, message: 'Form submission successful' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Form submission failed' });
  }
};
