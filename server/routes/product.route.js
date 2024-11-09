import express from 'express';
import { getProducts, getProductsByCategory, addProduct, editProduct, deleteProduct, getSpecialOffersProducts } from '../controllers/product.controller.js';
import  { uploadMultiple } from '../middleware/upload.js';

const router = express.Router();

const setProductUploadType = (req, res, next) => {
    req.uploadType = 'product';
    next();
};

// Route to get all products
router.get('/products/get', getProducts);
router.get('/products/get/category/:categoryId', getProductsByCategory);
router.get('/products/get/special-offers', getSpecialOffersProducts);
router.post('/products/add', setProductUploadType, uploadMultiple, addProduct); // Ensure this uses the correct middleware and field name
router.put('/products/edit', editProduct);
router.delete('/products/delete', deleteProduct);

export default router;
