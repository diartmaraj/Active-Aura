import express from 'express';
import {
  getUserProfiles,
  getUserProfileById,
  updateUserProfile,
  deleteUserProfile,
} from '../controllers/user.controller.js';
import  { uploadSingle } from '../middleware/upload.js';
import { body } from 'express-validator';

const router = express.Router();

const setUserProfileUploadType = (req, res, next) => {
  req.uploadType = 'userProfile';
  next();
};

router.get('/userProfiles', getUserProfiles);
router.get('/userProfiles/:id', getUserProfileById);
router.put(
  '/userProfiles/:id',
  setUserProfileUploadType,
  uploadSingle,
  [
    body('firstName').optional().notEmpty().withMessage('First name is required'),
    body('lastName').optional().notEmpty().withMessage('Last name is required'),
    body('email').optional().isEmail().withMessage('Valid email is required'),
  ],
  updateUserProfile
);
router.delete('/userProfiles/:id', deleteUserProfile);

export default router;
