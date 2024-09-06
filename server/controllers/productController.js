const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
        Product.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
};

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body.product);

        const savedProduct = await newProduct.save();
        
        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            data: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add product',
            error: error.message
        });
    }
};
module.exports = {
  getProducts,
  addProduct
};
