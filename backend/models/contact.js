const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, },
  email: { type: String },
  phone: { type: String },
  subject: { type: String},
  message: { type: String},
  file: { type: String } // Adjust if storing file path, otherwise remove the 'required' attribute
});

const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);

module.exports = ContactSubmission;
