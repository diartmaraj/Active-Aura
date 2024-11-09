import Product from '../models/product.model.js'
import Category from '../models/category.model.js'; // Assuming you have a Category model
import SubCategory from '../models/subCategory.model.js';
import mongoose from 'mongoose';

// Get all products
const getProducts = async (req, res) => {
    try {
        const { category,subcategory, brand, rating, discount, color, size, material, gender, availability } = req.query;

    // Construct a query object based on the filters
    const query = {};

    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (brand) query.brand = brand;
    if (rating) query.rating = { $gte: rating };
    if (discount) query.discount = { $gte: discount };
    if (color) query.color = color;
    if (size) query.size = size;
    if (material) query.material = material;
    if (gender) query.gender = gender;
    if (availability) query.availability = availability;
        const products = await Product.find(query).populate('category').populate('subcategory').populate('brand');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getProductsByCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
  
    try {
      if (!categoryId) {
        return res.status(400).json({ message: 'Category ID is required' });
      }
  
      const products = await Product.find({ category: categoryId }).populate('category');

  
      if (!products || products.length === 0) {
        return res.status(404).json({ message: 'No products found for this category' });
      }
  
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
const getSpecialOffersProducts = async (req, res) => {
    try {
      
        const products = await Product.find({ discount: { $gt: 0 } })
          .sort({ discount: -1 }) 
          .limit(5); 
    
       
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching special offers products.', error });
      }
}

 // Sample addProduct function
 const addProduct = async (req, res) => {
    try {
        // Access form fields and files
        const productData = req.body;
        const images = req.files;

        console.log('Received product data:', productData);
        console.log('Received images:', images);
        
        // Collect image paths
        const imagePaths = images.map(file => file.path);
        
        // Validate category and subcategory
        const category = mongoose.Types.ObjectId.isValid(productData.category)
            ? new mongoose.Types.ObjectId(productData.category)
            : null;

        const subcategory = mongoose.Types.ObjectId.isValid(productData.subcategory)
            ? new mongoose.Types.ObjectId(productData.subcategory)
            : null;

        if (!category || !subcategory) {
            return res.status(400).json({ message: 'Invalid category or subcategory ID' });
        }

        // Create a new product instance
        const product = new Product({
            ...productData,
            category,
            subcategory,
            images: imagePaths,
        });

        // Save the product to the database
        await product.save();

        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const editProduct = async (req, res) => {
    try {
        const updates = req.body.product;
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        Object.keys(updates).forEach((key) => {
            product[key] = updates[key];
        });

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
          } else if (err.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid product ID' });
          } else {
            return res.status(500).json({ message: 'Server error' });
          }
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.remove();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export { getProducts,getProductsByCategory, addProduct, editProduct, deleteProduct , getSpecialOffersProducts};

