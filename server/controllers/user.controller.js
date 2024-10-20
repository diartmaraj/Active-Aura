import User from '../models/user.model.js';

// Get all user profiles
export const getUserProfiles = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profiles', error });
  }
};

// Get a single user profile by ID
export const getUserProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};

// Update a user profile
export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const photo = req.file ? req.file.path : null;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    if (photo) {
      user.photo = photo;
    }

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error });
  }
};

// Delete a user profile
export const deleteUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    res.status(200).json({ message: 'User profile deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user profile', error });
  }
};
