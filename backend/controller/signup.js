const Signup = require('../models/signup');

// Controller to create a new signup
exports.createSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const signup = new Signup({ username, email, password });
    await signup.save();
    res.status(201).json({ success: true, message: 'Signup created successfully', signup });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create signup', error: error.message });
  }
};

// Controller to get all signups
exports.getAllSignups = async (req, res) => {
  try {
    const signups = await Signup.find();
    res.status(200).json({ success: true, signups });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch signups', error: error.message });
  }
};

// Controller to get a single signup by ID
exports.getSignupById = async (req, res) => {
  try {
    const signup = await Signup.findById(req.params.id);
    if (!signup) {
      return res.status(404).json({ success: false, message: 'Signup not found' });
    }
    res.status(200).json({ success: true, signup });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch signup', error: error.message });
  }
};

// Controller to update a signup by ID
exports.updateSignupById = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const signup = await Signup.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true });
    if (!signup) {
      return res.status(404).json({ success: false, message: 'Signup not found' });
    }
    res.status(200).json({ success: true, message: 'Signup updated successfully', signup });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update signup', error: error.message });
  }
};

// Controller to delete a signup by ID
exports.deleteSignupById = async (req, res) => {
  try {
    const signup = await Signup.findByIdAndDelete(req.params.id);
    if (!signup) {
      return res.status(404).json({ success: false, message: 'Signup not found' });
    }
    res.status(200).json({ success: true, message: 'Signup deleted successfully', signup });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete signup', error: error.message });
  }
};
