import Fair from '../models/Fair.js';

// @desc    Create a new fair
// @route   POST /api/fairs
// @access  Private/Admin
export const createFair = async (req, res) => {
  const { name, date, location } = req.body;

  const fair = new Fair({ name, date, location });

  try {
    const createdFair = await fair.save();
    res.status(201).json(createdFair);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all fairs
// @route   GET /api/fairs
// @access  Public
export const getFairs = async (req, res) => {
  try {
    const fairs = await Fair.find({});
    res.json(fairs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
