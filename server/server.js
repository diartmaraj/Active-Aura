// server.js
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser'
import productRoutes from './routes/product.route.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/category.route.js';
import subCategoryRoutes from './routes/subCategory.route.js';
import brandRoutes from './routes/brand.route.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
dotenv.config();
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5173;

app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', brandRoutes)
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);


const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.get('*', (req, res) => {
  const filePath = path.resolve(__dirname, 'client', 'public', 'index.html'); // Absolute path
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
});




app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

