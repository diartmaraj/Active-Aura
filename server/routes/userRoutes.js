// routes/userRoutes.js

const express = require('express');
const multer = require('multer');
const { protect } = require('../middleware/auth');
const { updateProfile } = require('../controllers/userController');

const router = express.Router();

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/userProfiles');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Update user profile
router.post('/profile/update', protect, upload.single('profileImage'), (req, res, next) => {
    console.log('Request received:', req.body);
    console.log('File received:', req.file);
    next();
  }, updateProfile);

module.exports = router;
