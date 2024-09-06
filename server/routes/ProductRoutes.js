const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');

const router = express.Router();

// Route to get all products
router.get('/products', getProducts);
router.post('/products/add', addProduct);


module.exports = router;
