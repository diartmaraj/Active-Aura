import multer from 'multer';
import path from 'path';

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadType = req.uploadType; // Get the upload type from the request
    let uploadPath;

    if (uploadType === 'brand') {
      uploadPath = 'uploads/brands';
    } else if (uploadType === 'userProfile') {
      uploadPath = 'uploads/userProfiles';
    } else if (uploadType === 'product') { // Ensure this matches the middleware setup
      uploadPath = 'uploads/images';
    } else {
      return cb(new Error('Invalid upload type'));
    }

    cb(null, uploadPath); // Set the directory to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Set the file name
  },
});

// Set up file filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|svg/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

// Multer instance for single file upload
export const uploadSingle = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter,
}).single('image'); // For single image uploads

// Multer instance for multiple files upload
export const uploadMultiple = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter,
}).array('images', 5); // For up to 5 images in an array