const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Initialize upload
const upload = multer({ storage });

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
    const imageUrl = `/uploads/images/${req.file.filename}`;
    // Save imageUrl to your MongoDB here
    res.send({ imageUrl });
});

// Serve images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
